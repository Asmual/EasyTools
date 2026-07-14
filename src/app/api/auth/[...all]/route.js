import { auth } from "@/lib/auth";

// Bind both GET and POST HTTP methods cleanly to BetterAuth handler pipeline
export const GET = auth.handler;
export const POST = auth.handler;