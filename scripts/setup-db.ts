import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

async function setupDatabase() {
  console.log('🔧 Setting up database...');
  
  try {
    const sqlite = new Database('./snapcast.db');
    const db = drizzle(sqlite);

    // Check if session table exists
    const sessionTableExists = sqlite.prepare(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name='session'
    `).get();

    if (!sessionTableExists) {
      console.log('📋 Session table not found, creating...');
      
      // Create session table manually if it doesn't exist
      sqlite.exec(`
        CREATE TABLE IF NOT EXISTS session (
          id TEXT PRIMARY KEY NOT NULL,
          expiresAt INTEGER NOT NULL,
          token TEXT NOT NULL,
          createdAt INTEGER NOT NULL,
          updatedAt INTEGER NOT NULL,
          ipAddress TEXT,
          userAgent TEXT,
          userId TEXT NOT NULL,
          activeExpires INTEGER NOT NULL,
          idleExpires INTEGER NOT NULL,
          FOREIGN KEY (userId) REFERENCES user(id) ON UPDATE no action ON DELETE cascade
        );
      `);
      
      console.log('✅ Session table created successfully!');
    } else {
      console.log('✅ Session table already exists!');
    }

    // Check if user table exists
    const userTableExists = sqlite.prepare(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name='user'
    `).get();

    if (!userTableExists) {
      console.log('📋 User table not found, creating...');
      
      sqlite.exec(`
        CREATE TABLE IF NOT EXISTS user (
          id TEXT PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          emailVerified INTEGER NOT NULL DEFAULT false,
          image TEXT,
          createdAt INTEGER NOT NULL,
          updatedAt INTEGER NOT NULL
        );
      `);
      
      console.log('✅ User table created successfully!');
    } else {
      console.log('✅ User table already exists!');
    }

    // Create account table if it doesn't exist
    const accountTableExists = sqlite.prepare(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name='account'
    `).get();

    if (!accountTableExists) {
      console.log('📋 Account table not found, creating...');
      
      sqlite.exec(`
        CREATE TABLE IF NOT EXISTS account (
          id TEXT PRIMARY KEY NOT NULL,
          accountId TEXT NOT NULL,
          providerId TEXT NOT NULL,
          userId TEXT NOT NULL,
          accessToken TEXT,
          refreshToken TEXT,
          idToken TEXT,
          accessTokenExpiresAt INTEGER,
          refreshTokenExpiresAt INTEGER,
          scope TEXT,
          password TEXT,
          createdAt INTEGER NOT NULL,
          updatedAt INTEGER NOT NULL,
          FOREIGN KEY (userId) REFERENCES user(id) ON UPDATE no action ON DELETE cascade
        );
      `);
      
      console.log('✅ Account table created successfully!');
    } else {
      console.log('✅ Account table already exists!');
    }

    // List all tables to verify
    const tables = sqlite.prepare(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name NOT LIKE 'sqlite_%'
    `).all();

    console.log('📊 Available tables:', tables.map((t: any) => t.name).join(', '));

    sqlite.close();
    console.log('🎉 Database setup complete!');
    
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();