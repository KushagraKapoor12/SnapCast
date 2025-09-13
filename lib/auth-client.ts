import { createAuthClient } from "better-auth/react";

// Use BETTER_AUTH_URL for correct backend endpoint
export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BASE_URL,
});