import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface ITempSession {
  _id: string;
  email: string;
  token: string;
  compareToken: (token: string) => Promise<boolean>;
}

const tempSessionsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/, "Please provide a valid email address"],
  },
  token: {
    type: String,
    required: true,
    expires: "1m",
  },
});

tempSessionsSchema.pre("save", async function (next) {
  if (this.isModified("token")) {
    this.token = await bcrypt.hash(this.token, 10);
  }
  next();
});

tempSessionsSchema.methods.compareToken = async function (token: string) {
  if (this.isNew) {
    throw new Error("Token not yet saved, unable to compare");
  }
  return await bcrypt.compare(token, this.token as string);
};

const TempSession = mongoose.model<ITempSession>("TempSession", tempSessionsSchema);

export default TempSession;
