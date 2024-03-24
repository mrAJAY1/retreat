import crypto from "crypto";
import { type NextFunction, type Request, type Response } from "express";
import { google } from "googleapis";

import { sendAccessTokenCookie, sendRefreshToken } from "../utils/jwtUtils";
import config from "../config/config";
import User from "../model/users";
import TempSession from "../model/tempSessions";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  config.googleCallbackUrl,
);

// REVIEW - check this
declare module "express-session" {
  interface SessionData {
    socialSignup?: { email: string };
  }
}

const authController = {
  // Route name: /auth/google
  googleAuth: async (req: Request, res: Response) => {
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/userinfo.email",
    });
    console.log(url);
    res.redirect(url);
  },

  // Route name: /auth/google/callback
  googleAuthCallback: async (req: Request, res: Response, next: NextFunction) => {
    const { code } = req.query;
    if (!code) {
      console.error("Google Auth Callback Error: Missing code in query string");
      const errorMessage = encodeURIComponent("Google authentication failed. Please try again.");
      // REVIEW - Check this redirect
      return res.redirect(`${config.frontendOrigin}/error?message=${errorMessage}`);
    }

    try {
      const { tokens } = await oauth2Client.getToken(code as string);
      if (!tokens) throw new Error("Failed to get tokens from google oauth");
      oauth2Client.setCredentials(tokens);

      const oauth2 = google.oauth2({
        auth: oauth2Client,
        version: "v2",
      });

      const response = await oauth2.userinfo.get();
      const { email } = response.data;

      if (!email) {
        res.redirect(400, `${config.frontendOrigin}/?error=1&message=Email not found in google account`);
        return;
      }

      const user = await User.findOne({ email });
      // const user = { _id: "banana", email: "test@test.com" };
      if (user) {
        sendRefreshToken(res, { id: user._id });
        // const accesssT = createToken({ id: user._id }, "accessToken");
        // const html = `
        // <!DOCTYPE html>
        //   <html>
        //   <body>
        //   <h1>Hello</ h1>
        //   <script>
        //     (function() {
        //       var accessToken = '${accesssT}'; // Backend injects the token here
        //       var targetOrigin = '${config.frontendOrigin}';
        //       if(window.opener){
        //       // Send the token to the opener window
        //       window.opener.postMessage({ accessToken: accessToken }, targetOrigin);
        //       return window.close(); // Close the handler page
        //       }
        //       localStorage.setItem('accessToken', accessToken);
        //       window.location.href = targetOrigin;
        //     })();
        //   </script>
        //   </body>
        //   </html>
        // `;
        sendAccessTokenCookie(res, { id: user._id });
      }

      const nonce = crypto.randomBytes(16).toString("hex").toUpperCase();

      // create temporary session
      await TempSession.findOneAndUpdate({ email }, { token: nonce }, { upsert: true });

      req.session.socialSignup = { email };

      res.redirect(`/api/auth/complete_signup?ssfKey=${nonce}`);
    } catch (e: any) {
      console.log(e);
      next({ message: "Request failed due to an internal error" });
    }
  },
  completeSignup: async (req: Request, res: Response) => {
    // const email = req.session.socialSignup?.email;
    // const ssfKey = req.query.ssfKey;

    // // REVIEW - Check this
    // if (!email || !ssfKey) {
    //   res.redirect(`${config.frontendOrigin}/?error=1&message=invalid session`);
    //   return;
    // }

    // const session = await TempSession.findOne({ email });
    // if (!session || !session.token) {
    //   res.redirect(`${config.frontendOrigin}/?error=1&message=session expired`);
    //   return;
    // }
    // if (!(await session.compareToken(ssfKey as string))) {
    //   res.redirect(`${config.frontendOrigin}/?error=1&message=invalid session`);
    //   return;
    // }
    const email = "test@test.com";
    const ssfKey = "banana";
    res.render("signupForm", {
      email,
      ssfKey,
      actionUrl: "/api/auth/complete_signup",
      isSocialSignup: false,
    });

    // const user = await User.findOne({ email });
  },
  completeSignupPost: async (req: Request, res: Response) => {
    const bearerToken = req.headers.authorization?.split(" ")[1];
    // if (!bearerToken) {
    //   res.redirect(`${config.frontendOrigin}/?error=1&message=invalid session`);
    //   return;
    // }
    // const token = bearerToken.split(" ")[1];
    // if (!token) {
    //   res.redirect(`${config.frontendOrigin}/?error=1&message=invalid session`);
    //   return;
    // }
    // const user = await User.findOne({ email: req.body.email });
    // if (!user) {
    //   res.redirect(`${config.frontendOrigin}/?error=1&message=invalid session`);
    //   return;
    // }
    // sendRefreshToken(res, { id: user._id });
    console.log(bearerToken);
    console.log(req.body);
  },
  checkEmail: async (req: Request, res: Response) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) res.send(user);
  },

  signUp: async (req: Request, res: Response) => {
    try {
      const user = new User(req.body);
      await user.save();
      return res.status(201).send({
        message: "user created",
        data: {
          email: user.email,
          name: user.firstName + " " + user.lastName,
        },
      });
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "some error has occurred" });
    }
  },
};

export default authController;
