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

app.get("/api/categories", async (req, res) => {
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

app.get("/api/sub-categories", async (req, res) => {
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

app.get("/api/duas", async (req, res) => {
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

app.get("/api/sub-categories-with-category", async (req, res) => {
  await new Promise((resolve, reject) => {
    db.all(
      `SELECT category.*,
    (
        SELECT JSON_GROUP_ARRAY(
            JSON_OBJECT(
                'id', sub_category.id,
                'subcat_id', sub_category.subcat_id,
                'subcat_name_bn', sub_category.subcat_name_bn,
                'subcat_name_en', sub_category.subcat_name_en,
                'no_of_dua', sub_category.no_of_dua
            )
        )
        FROM sub_category 
        WHERE sub_category.cat_id = category.cat_id
    ) AS sub_category
FROM category 
ORDER BY category.id ASC;`,
      [],
      (error, rows: any) => {
        if (error) {
          reject(error);
          res.status(500).send(error);
        } else {
          resolve(rows);
          // Parse the JSON string to real objects
          const result = rows.map((row: any) => ({
            id: row.id,
            cat_id: row.cat_id,
            cat_name_bn: row.cat_name_bn,
            cat_name_en: row.cat_name_en,
            no_of_subcat: row.no_of_subcat,
            no_of_dua: row.no_of_dua,
            cat_icon: row.cat_icon,
            sub_category: JSON.parse(row.sub_category || "[]"),
          }));
          res.status(200).send(result);
        }
      },
    );
  });
});

export default app;
