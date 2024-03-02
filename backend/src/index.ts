import "dotenv/config";
import express, { type Request, type Response, type NextFunction, type ErrorRequestHandler } from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import expressSession from "express-session";

import authRouter from "./routes/auth";
import config from "./config/config";
import DOMPurify from "dompurify";
import path from "path";

// Connect to MongoDB
export const db = mongoose.connection;

if (process.env.NODE_ENV === "test") console.log("running on test mode");

void mongoose.connect(process.env.MONGO_URI!);

db.once("open", () => {
  console.log("db established");
});
db.on("error", console.error.bind(console, "DB Connection ERROR: "));

// Create express app
const app = express();

// set up the base url
app.set("baseUrl", "/");
// set up view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// sanitize html
app.use((req, res, next) => {
  res.locals.sanitizeHtml = (dirtyHtml: string) => {
    return DOMPurify.sanitize(dirtyHtml);
  };
  next();
});

// Apply middleware
app.use(cookieParser(process.env.COOKIE_KEY));

// social signup session cookie with maxAge 1 minute
app.use(
  expressSession({
    secret: process.env.COOKIE_KEY!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: config.secure,
      maxAge: config.sessionCookieMaxAge,
    },
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Attach routes
app.use("/api/auth", authRouter);

// Error handling middleware
const errorHandler: ErrorRequestHandler = (err: any, _req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };

  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  if (res.headersSent) {
    next(err);
    return;
  }
  return res.status(errorObj.status as number).json(errorObj.message);
};
app.use(errorHandler);

// Handle 404 errors
app.use((req, res, next) => {
  console.log(req.path, req.method);
  res.status(404).json({ message: "Not found" });
});

// Start server
const port = process.env.PORT ?? 5100;
app.listen(port, () => {
  console.log(
    `\x1b[34mBackend running on \x1b]8;;http://localhost:${port}\x1b\\http://localhost:${port}\x1b]8;;\x1b\\\x1b[0m`,
  );
});

export default app;
