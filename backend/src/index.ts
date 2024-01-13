import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth";

export const db = mongoose.connection;

mongoose.connect(process.env.MONGO_URI as string);

db.once("open", () => console.log("db established"));

db.on("error", console.error.bind(console, "DB Connection ERROR: "));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_KEY));
app.use(cors());

app.use("/api/auth", authRouter);

const port = process.env.PORT || 5100;

app.listen(port, () => console.log(`Backend running on ${port}`));

export default app;
