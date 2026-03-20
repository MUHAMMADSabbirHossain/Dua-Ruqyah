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

app.get("/api/catalog", async (req, res) => {
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
                'no_of_dua', sub_category.no_of_dua,
                'duas', (
                    SELECT JSON_GROUP_ARRAY(
                        JSON_OBJECT(
                            'dua_id', dua.dua_id,
                            'dua_name_bn', dua.dua_name_bn,
                            'dua_name_en', dua.dua_name_en,
                            'dua_arabic', dua.dua_arabic,
                            'transliteration_bn', dua.transliteration_bn,
                            'transliteration_en', dua.transliteration_en,
                            'translation_bn', dua.translation_bn,
                            'translation_en', dua.translation_en,
                            'audio', dua.audio
                        )
                    )
                    FROM dua
                    WHERE dua.cat_id = category.cat_id 
                    AND dua.subcat_id = sub_category.subcat_id
                )
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

          const result = rows.map((row: any) => ({
            ...row,
            sub_category: JSON.parse(row?.sub_category || "[]"),
          }));

          res.send(result);
        }
      },
    );
  });
});

export default app;
