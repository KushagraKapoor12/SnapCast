import { betterAuth, Schema } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb } from "@/drizzle/db";
import {schema} from "@/drizzle/schema";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: drizzleAdapter(getDb(), {
        provider:'sqlite',
        schema,
    }),
        socialProviders:{
            google:{
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            }
        },
        plugins: [nextCookies()],
        baseURL: process.env.NEXT_PUBLIC_BASE_URL!,
    })