import {config} from 'dotenv';
import {defineConfig} from "drizzle-kit";

config({path : './.env'});

const usePostgres = !!process.env.DATABASE_URL;

export default defineConfig({
    schema: usePostgres ? './drizzle/schema-postgres.ts' : './drizzle/schema.ts',
    out: './drizzle/migrations',
    dialect: usePostgres ? 'postgresql' : 'sqlite',
    dbCredentials: usePostgres
        ? {
            url: process.env.DATABASE_URL!,
        }
        : {
            url: './snapcast.db',
        }
})