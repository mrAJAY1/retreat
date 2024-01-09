import "dotenv/config";
import { TokenType, createToken } from "../../utils/jwtUtils";

describe("createToken fn() test cases", () => {
  let originalEnv: typeof process.env;
  beforeEach(() => {
    originalEnv = { ...process.env };
    process.env = {
      ...originalEnv,
      ACCESS_TOKEN_KEY: "mock access token key",
      REFRESH_TOKEN_KEY: "mock refresh token key",
      VERIFICATION_TOKEN_KEY: "mock verification token key",
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  const testTokenThrowsError = (tokenType: TokenType) => {
    expect(() => createToken("test@test.com", "test user", tokenType)).toThrow(
      `Invalid or missing environment variable for ${tokenType}`
    );
  };

  it("Should throw error if secret key for access token is not provided", () => {
    delete process.env.ACCESS_TOKEN_KEY;
    testTokenThrowsError("accessToken");
  });
  it("Should throw error if secret key for refresh token is not provided", () => {
    delete process.env.REFRESH_TOKEN_KEY;
    testTokenThrowsError("refreshToken");
  });
  it("Should throw error if secret key for verification token is not provided", () => {
    delete process.env.VERIFICATION_TOKEN_KEY;
    testTokenThrowsError("verificationToken");
  });

  const testReturnsToken = (tokenType: TokenType) => {
    expect(createToken("test@test.com", "test user", tokenType)).toBeDefined();
  };

  it("Should return a refresh token", () => {
    testReturnsToken("refreshToken");
  });
  it("Should return an access token", () => {
    testReturnsToken("accessToken");
  });
  it("Should return a verification token", () => {
    testReturnsToken("verificationToken");
  });
});
