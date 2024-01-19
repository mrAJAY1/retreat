import { NextFunction, Request, Response } from "express";
import User from "../model/users";
import { google } from "googleapis";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { createToken } from "../utils/jwtUtils";

const oauth2Client = new google.auth.OAuth2(
  "292735024111-98gvhdt8b3rq2jqlpdnrnc7fenfqgfj7.apps.googleusercontent.com",
  "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",
  "http://localhost:5100/api/auth/google/callback"
);

const authController = {
  // Route name: /auth/google
  googleAuth: async (req: Request, res: Response) => {
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/userinfo.email",
    });
    res.redirect(url);
  },

  // Route name: /auth/google/callback
  googleAuthCallback: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { code } = req.query;
    if (!code) {
      console.error("Google Auth Callback Error: Missing code in query string");
      const errorMessage = encodeURIComponent(
        "Google authentication failed. Please try again."
      );
      return res.redirect(
        `http://localhost:5173/error?message=${errorMessage}`
      );
    }

    try {
      const { tokens } = await oauth2Client.getToken(code as string);
      if (!tokens) throw new Error("Failed to get tokens");
      oauth2Client.setCredentials(tokens);

      const oauth2 = google.oauth2({
        auth: oauth2Client,
        version: "v2",
      });

      const response = await oauth2.userinfo.get();
      const { email } = response.data;
      // const user = await User.findOne({ email });
      const user = { _id: "banana", email: "test@test.com" };
      if (!user) {
        const nonce = crypto.randomBytes(16).toString("hex").toUpperCase();
        res.cookie("social_ssf", JSON.stringify({ key: nonce, email }), {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          expires: new Date(Date.now() + 1000 * 60 * 5),
        }); // Set nonce in a httpOnly cookie
        res.redirect(`http://localhost:5173/social_signup?ssf_key=${nonce}`);
        return;
        // To continue the process in React, you would typically:
        // 1. Receive the nonce and user data in your React application, typically in the component handling the /signup route.
        //    You can access the nonce from the URL using the react-router library's useLocation hook.
        //    Extract the nonce from the query parameters and compare it with the nonce stored in the httpOnly cookie.

        // 2. If the nonces match, you can present the user a form to complete their signup. This form could include fields for their name, password, etc.

        // 3. When the user submits the form, make a POST request to your backend with the form data and the email from step 1.

        // 4. On your backend, find the user document with the matching email, and update it with the information from the form.
        //    Generate a JWT for the user, and send it back to the client.

        // 5. On your client, store the JWT in the user's local storage or in a secure httpOnly cookie.
        //    The JWT will be used to authenticate the user in subsequent requests.

        // 6. Redirect the user to the homepage or dashboard. They are now signed up and logged in!
      }
      res.cookie(
        "refreshToken",
        createToken({ id: user._id }, "refreshToken"),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          expires: new Date(
            Date.now() +
              1000 * (Number(process.env.RT_EXPIRY) || 60 * 60 * 24 * 7)
          ),
        }
      );
      res.cookie("accessToken", createToken({ id: user._id }, "accessToken"), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(
          Date.now() + 1000 * (Number(process.env.AT_EXPIRY) || 60 * 15)
        ),
      });
      res.redirect(`http://localhost:5173/success_social_login`);
    } catch (e: any) {
      console.log(e);
      next({ message: "Request failed due to an internal error" });
    }
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
      res.status(500).send({ message: "some error has occured" });
    }
  },
};

export default authController;
