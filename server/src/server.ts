import express from "express";

const app = express();

app.get("/ping", (req, res) => {
  console.log("Pong.");

  res.send("pong");
});

export default app;
