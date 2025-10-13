const request = require("supertest");
const app = require("./server");

test("Homepage works", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe("CI/CD Pipeline Working! 🚀");
});

test("Products page works", async () => {
  const response = await request(app).get("/products");
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
  expect(response.body.length).toBe(3);
});
