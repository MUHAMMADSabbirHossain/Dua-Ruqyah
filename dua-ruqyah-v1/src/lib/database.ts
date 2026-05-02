import Database from "better-sqlite3";
import path from "path";

let dbInstance: Database.Database | null = null;

function dbConnection(): Database.Database {
  // Return existing connection if already created
  if (dbInstance) {
    return dbInstance;
  }

  // Resolve the absolute path to the database file
  const dbPath = path.resolve(
    process.cwd(),
    "src",
    "database",
    "database.sqlite",
  );

  // Create new database connection
  dbInstance = new Database(dbPath);

  // Enable foreign key constraints
  dbInstance.pragma("foreign_keys = ON");

  // Set busy timeout (wait 5 seconds if database is locked)
  dbInstance.pragma("busy_timeout = 5000");

  console.log(`✅ Database connected: ${dbPath}`);

  return dbInstance;
}

// Optional: Close connection on app exit
process.on("beforeExit", () => {
  if (dbInstance) {
    dbInstance.close();
    console.log("📦 Database connection closed");
  }
});

export default dbConnection();
