/* External Dependencies */
import express from "express";
import cors from "cors";

/* Internal Dependencies */
import databaseConnection from "./libs/db";

/* Instance */
const app = express();
const db = await databaseConnection();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.get("/", (req, res) => {
  console.log("Response sent.");

  res.send("Hello World!");
});

app.get("/ping", (req, res) => {
  console.log("Pong.");

  res.send("pong");
});

app.get("/users", async (req, res) => {
  const users = await new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });

  res.send(users);
});

export default app;
