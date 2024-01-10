import "dotenv/config";
import sendVerificationEmail from "../../utils/sendVerificationEmail";

describe("sendVerificationEmail() test cases", () => {
  //NOTE - uncomment when buying a domain to avoid email being listed into spam
  // it("should return a value", async () => {
  //   expect.assertions(1);
  //   const info = await sendVerificationEmail(
  //     "ajayprakash0320@gmail.com",
  //     "https://youtube.com"
  //   );
  //   expect(info).toBeDefined();
  // }, 10000);
  it("continuos mailing may cause the email address to be listed into spam", () => {
    console.log("ignored test");
  });
});
