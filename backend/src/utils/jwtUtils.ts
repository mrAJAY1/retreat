import { type Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";

export type TokenType = "verificationToken" | "refreshToken" | "accessToken";

export const createToken = (payload: object, tokenType: TokenType): string => {
  if (Object.keys(payload).length === 0) {
    throw new Error("Payload cannot be empty");
  }
  // env variables
  const { VERIFICATION_TOKEN_KEY, REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY, RT_EXPIRY, AT_EXPIRY, VT_EXPIRY } = process.env;

  // checks if env variables are provided
  if (!VERIFICATION_TOKEN_KEY || !REFRESH_TOKEN_KEY || !ACCESS_TOKEN_KEY) {
    throw new Error("Missing VERIFICATION_TOKEN_KEY, REFRESH_TOKEN_KEY, or ACCESS_TOKEN_KEY environment variables");
  }

  // token secret keys are taken conditionally instead of using switch block
  const tokenKeys: Record<TokenType, string> = {
    verificationToken: VERIFICATION_TOKEN_KEY,
    refreshToken: REFRESH_TOKEN_KEY,
    accessToken: ACCESS_TOKEN_KEY,
  };

  // checks if signing keys are provided
  if (!tokenKeys[tokenType]) {
    throw new Error(`Invalid or missing environment variable for ${tokenType}`);
  }

  // appropriate expiration time for token
  const tokenExpiry: Record<TokenType, string | number> = {
    accessToken: AT_EXPIRY ?? 60 * 15,
    refreshToken: RT_EXPIRY ?? "7d",
    verificationToken: VT_EXPIRY ?? "24h",
  };

  // signs the token with appropriate keys and payload
  const token = jwt.sign({ payload }, tokenKeys[tokenType], {
    expiresIn: tokenExpiry[tokenType],
  });

  return token;
};

export const sendAccessTokenCookie = (res: Response, payload: object): void => {
  res.cookie("accessToken", createToken(payload, "accessToken"), {
    secure: config.secure,
    expires: new Date(Date.now() + 1000 * (Number(process.env.AT_EXPIRY) || 60 * 15)),
  });
};
export const sendRefreshToken = (res: Response, payload: object): void => {
  res.cookie("refreshToken", createToken(payload, "refreshToken"), {
    httpOnly: true,
    secure: config.secure,
    expires: new Date(Date.now() + 1000 * (Number(process.env.RT_EXPIRY) || 60 * 60 * 24 * 7)),
  });
};
