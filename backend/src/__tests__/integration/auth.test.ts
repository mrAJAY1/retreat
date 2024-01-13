import app, { db } from "../../index";
import request from "supertest";

describe("Tests /api/auth endpoint", () => {
  afterAll(async () => {
    await db.dropDatabase();
  });

  test("GET /api/auth/register Should return 200 ok with json object containing message", async () => {
    jest.setTimeout(10000);
    const endpoint = "/api/auth";
    const response = await request(app).post(`${endpoint}/register`).send({
      firstName: "test",
      lastName: "user",
      email: "test@test.com",
      password: "test",
    });

    expect(response.statusCode).toBe(201);
    console.log(response.body);
    // checks content-type: application/json
    expect(response.headers["content-type"]).toMatch(/application\/json/);
    
  });
});
 // Example: await db.dropDatabase();