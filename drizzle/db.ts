import { drizzle as drizzlePostgres } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Create a singleton PostgreSQL instance
let _db: ReturnType<typeof drizzlePostgres> | null = null;

export function getDb() {
  if (!_db) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is required for Neon database connection');
    }
    console.log('🐘 Using PostgreSQL database (Neon)');
    const client = postgres(process.env.DATABASE_URL);
    _db = drizzlePostgres(client);
  }
  return _db;
}

// For compatibility with existing imports
export const db = getDb();