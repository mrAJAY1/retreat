import "dotenv/config";
import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth";

// Connect to MongoDB
export const db = mongoose.connection;
mongoose.connect(process.env.MONGO_URI as string);
db.once("open", () => console.log("db established"));
db.on("error", console.error.bind(console, "DB Connection ERROR: "));

// Create express app
const app = express();

// Apply middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_KEY));
app.use(cors());

// Attach routes
app.use("/api/auth", authRouter);

// Error handling middleware
const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };

  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  if (res.headersSent) return next(err);
  return res.status(errorObj.status).json(errorObj.message);
};
app.use(errorHandler);

// Handle 404 errors
app.use((req, res, next) => {
  console.log(req.path, req.method);
  res.status(404).json({ message: "Not found" });
});

// Start server
const port = process.env.PORT || 5100;
app.listen(port, () => console.log(`Backend running on ${port}`));

export default app;


