import { Request, Response } from "express";
import User from "../model/users";
import { google } from "googleapis";
import jwt from "jsonwebtoken";
import crypto from "crypto";

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
  googleAuthCallback: async (req: Request, res: Response) => {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code as string);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: "v2",
    });

    const response = await oauth2.userinfo.get();
    const { email } = response.data;
    const user = await User.findOne({ email });
    if (!user) {
      const nonce = crypto.randomBytes(16).toString("hex").toUpperCase();
      res.cookie("googleSSF", nonce, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(Date.now() + 1000 * 60 * 5),
      }); // Set nonce in a httpOnly cookie
      res.redirect(`http://localhost:5173/signup?ssf=${nonce}`);

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
      
      return;
    }

    const token = jwt.sign({ userId: user._id }, "your-secret-key");
    res.send({ token });
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
