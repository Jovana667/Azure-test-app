const request = require("supertest");
const app = require("./app");

test("Homepage works", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe("Welcome to my shop!");
});

test("Products page works", async () => {
  const response = await request(app).get("/products");
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
  expect(response.body.length).toBe(3);
});
