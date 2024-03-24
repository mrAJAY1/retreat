import nodemailer from "nodemailer";
import getEmailContentWithVerifyLink from "./getEmailContentWithVerifyLink";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

const sendVerificationEmail = async (
  email: string,
  verificationUrl: string,
): Promise<SMTPTransport.SentMessageInfo> => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS)
    throw new Error("Missing EMAIL_USER or EMAIL_PASS environment variables for nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: { name: "Retreat", address: process.env.EMAIL_USER },
    to: email,
    subject: "Please confirm your email address",
    html: getEmailContentWithVerifyLink(verificationUrl),
  });
  transporter.close();
  return info;
};
export default sendVerificationEmail;
