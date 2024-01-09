import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import path from "path";
import getEmailContentWithVerifyLink from "./getEmailContentWithVerifyLink";

function createEmailVerificationToken(email: string) {
  const token = jwt.sign(
    { email, verification: "EMAIL" },
    process.env.VERIFICATION_TOKEN_KEY as string,
    {
      expiresIn: "10h",
    }
  );
  return token;
}
const sendVerificationEmail = async (email: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: { name: "Retreat", address: process.env.MAIL_USER as string },
      to: email,
      subject: "Verify Email",
      html:getEmailContentWithVerifyLink('https://www.youtube.com/watch?v=HAnw168huqA'),
    });
    return info;
  } catch (e) {
    console.dir(e);
  }
};
export default sendVerificationEmail;
