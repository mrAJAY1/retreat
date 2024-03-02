import "express-session";

 declare module "express-session" {
  interface SessionData {
    socialSignup?: { email: string };
  }
}
