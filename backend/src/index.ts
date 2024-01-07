import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

const db = mongoose.connection;

mongoose.connect(process.env.MONGO_URI as string);

db.once("open", () => console.log("db established"));

db.on("error", console.error.bind(console, "DB Connection ERROR: "));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/test", async (_req: Request, res: Response) => {
  res.json({ message: "Hello from express server" });
});

const port = process.env.PORT || 5100;

app.listen(port, () => console.log(`Backend running on ${port}`));
