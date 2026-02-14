import express from "express";
import cors from "cors";

const app = express();

/* Middlewares */
app.use(cors());

app.get("/", (req, res) => {
  console.log("Response sent.");
  res.send("Hello World!");
});

app.get("/ping", (req, res) => {
  console.log("Pong.");

  res.send("pong");
});

export default app;
