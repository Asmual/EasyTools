import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Base architectural deployment deployment target URL node
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});