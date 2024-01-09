import "dotenv/config";
import sendVerificationEmail from "../../utils/sendVerificationEmail";

describe("sendVerificationEmail() test cases", () => {
  it("should return a value", async () => {
    expect.assertions(1);
    const info = await sendVerificationEmail(
      "ajayprakash0320@gmail.com",
      "https://youtube.com"
    );

    console.log(info);
    expect(info).toBeDefined();
  }, 10000);
});
