import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/upload", async (c) => {
  const body = await c.req.parseBody();
  console.log(body["file"]);
  return c.json({
    runtime: "bun",
  });
});

export default app;
