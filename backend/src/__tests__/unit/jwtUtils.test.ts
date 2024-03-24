import "dotenv/config";
import { type TokenType, createToken } from "../../utils/jwtUtils";

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

  it("Should throw error if payload is empty", () => {
    expect.assertions(3);
    const testPayload = (tokenType: TokenType): void => {
      expect(() => createToken({}, tokenType)).toThrow("Payload cannot be empty");
    };
    testPayload("accessToken");
    testPayload("refreshToken");
    testPayload("verificationToken");
  });

  describe("Error handling for invalid or missing env variable", () => {
    const testTokenThrowsError = (tokenType: TokenType): void => {
      expect(() => createToken({ email: "test@test.com" }, tokenType)).toThrow(
        `Invalid or missing environment variable for ${tokenType}`,
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
  });

  const testReturnsToken = (tokenType: TokenType): void => {
    expect(createToken({ email: "test@test.com" }, tokenType)).toBeDefined();
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
