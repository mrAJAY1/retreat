import request from "supertest";
import app from "../../index";

describe("Tests /api/test endpoint", () => {
  test("GET /api/test Should return 200 ok with json object containing message", async () => {
    const response = await request(app).get("/api/test");

    expect(response.statusCode).toBe(200);

    // checks content-type: application/json
    expect(response.headers["content-type"]).toMatch(/application\/json/);

    expect(response.body.message).toBe("Hello from express server");
  });
});
