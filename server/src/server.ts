/* External Dependencies */
import express from "express";
import cors from "cors";
import path from "path";

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
  await new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", [], (error, rows) => {
      if (error) {
        reject(error);
        res.status(500).send(error);
      } else {
        resolve(rows);
        res.status(200).send(rows);
      }
    });
  });
});

app.get("/categories", async (req, res) => {
  await new Promise((resolve, reject) => {
    db.all("SELECT * FROM category", [], (error, rows) => {
      if (error) {
        reject(error);
        res.status(500).send(error);
      } else {
        resolve(rows);
        res.status(200).send(rows);
      }
    });
  });
});

app.get("/sub-categories", async (req, res) => {
  await new Promise((resolve, reject) => {
    db.all("SELECT * FROM sub_category", [], (error, rows) => {
      if (error) {
        reject(error);
        res.status(500).send(error);
      } else {
        resolve(rows);
        res.status(200).send(rows);
      }
    });
  });
});

app.get("/duas", async (req, res) => {
  await new Promise((resolve, reject) => {
    db.all("SELECT * FROM dua", [], (error, rows) => {
      if (error) {
        reject(error);
        res.status(500).send(error);
      } else {
        resolve(rows);
        res.status(200).send(rows);
      }
    });
  });
});

export default app;
