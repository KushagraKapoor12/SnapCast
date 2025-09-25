import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

// Create a singleton instance
let _db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (!_db) {
    const sqlite = new Database("snapcast.db");
    _db = drizzle(sqlite);
  }
  return _db;
}

// For compatibility with existing imports
export const db = getDb();