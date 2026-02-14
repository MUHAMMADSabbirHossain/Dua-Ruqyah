import path from "path";
import sqlite3 from "sqlite3";

const databasePath = path.join(__dirname, process.env.DB_PATH as string);

/* database connection */
function databaseConnection(): Promise<sqlite3.Database> {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(databasePath, (error) => {
      if (error) {
        // console.error(`Error opening database: ${error.message}`);
        reject(error);
      } else {
        // console.log(`Connected to the database. Database path: ${databasePath}`);
        resolve(db);
      }
    });
  });
}

export default databaseConnection;
