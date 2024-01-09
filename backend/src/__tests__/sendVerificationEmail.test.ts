import sendVerificationEmail from "../utils/sendVerification";
import "dotenv/config";

describe("Test send Mailer test Account working", () => {
  test("sample mail to sample number", async () => {
    await sendVerificationEmail("aranyakn815@gmail.com");
  });
});
