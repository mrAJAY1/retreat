import mongoose from "mongoose";
import bcrypt from "bcrypt";
import configs from "../config/config";

type IUser = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  verified: boolean;
  token: { kind: string; value: string }[];
  socialLogins: {
    name: "GOOGLE" | "FACEBOOK" | "APPLE";
    id: string;
  }[];
};

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    password: { type: String },
    tokens: [
      {
        kind: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    socialLogins: [
      {
        name: { type: String, required: true },
        id: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    if (this.password === null || this.password === undefined)
      throw new Error("Password cannot be null or undefined");
    if (configs.pwdRegex.test(this.password) === false)
      throw new Error(`Password does not meet the criteria`);
    this.password = await bcrypt.hash(this.password, 10);
  }
});
const User = mongoose.model<IUser>("User", userSchema);
export default User;
