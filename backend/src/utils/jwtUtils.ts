import jwt from "jsonwebtoken";

export type TokenType = "verificationToken" | "refreshToken" | "accessToken";

export const createToken = (payload: object, tokenType: TokenType): string => {
  if (Object.keys(payload).length === 0) {
    throw new Error("Payload cannot be empty");
  }
  // env variables
  const {
    VERIFICATION_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    ACCESS_TOKEN_KEY,
    RT_EXPIRY,
    AT_EXPIRY,
    VT_EXPIRY,
  } = process.env;

  // token secret keys are taken conditionally instead of using switch block
  const tokenKeys: Record<TokenType, string> = {
    verificationToken: VERIFICATION_TOKEN_KEY as string,
    refreshToken: REFRESH_TOKEN_KEY as string,
    accessToken: ACCESS_TOKEN_KEY as string,
  };

  // checks if signing keys are provided
  if (!tokenKeys[tokenType]) {
    throw new Error(`Invalid or missing environment variable for ${tokenType}`);
  }

  // appropriate expiration time for token
  const tokenExpiry: Record<TokenType, string | number> = {
    accessToken: AT_EXPIRY || 60 * 15,
    refreshToken: RT_EXPIRY || "30d",
    verificationToken: VT_EXPIRY || "24h",
  };

  // signs the token with appropriate keys and payload
  const token = jwt.sign({ payload }, tokenKeys[tokenType], {
    expiresIn: tokenExpiry[tokenType],
  });

  return token;
};
