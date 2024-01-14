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
    console.log(response.data);
    const user = await User.findOne({ email });
    if (!user) {
      const algorithm = "aes-256-ctr";
      const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3"; // use your own secret key
      const iv = crypto.randomBytes(16);

      const encrypt = (text: string) => {
        const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

        return encrypted.toString("hex").toUpperCase();
      };
      const data = { email, expiry: Date.now() + 300000 };
      const encryptedEmail = encodeURIComponent(encrypt(JSON.stringify(data)));
      
      res.redirect(
        `http://localhost:5173/social_signup?ssf_key=${encryptedEmail}`
      );
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
