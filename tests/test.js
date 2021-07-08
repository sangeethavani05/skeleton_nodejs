const request = require("supertest");
const app = require("../src/app");

test("GET /users", async () => {
  await request(app).get("/users")
    .expect({ name: "Sangee" })
    .expect(200);
});
