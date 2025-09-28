import { createAuthClient } from "better-auth/react";

// Use NEXT_PUBLIC_BASE_URL for client-side auth
export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});