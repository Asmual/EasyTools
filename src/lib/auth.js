import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "node:dns";

// Enforce reliable DNS servers to resolve MongoDB Atlas connection issues
dns.setServers(["1.1.1.1", "8.8.8.8"]);

if (!process.env.MONGODB_URI) {
  throw new Error("Missing MONGODB_URI environment variable in .env.local");
}

// Establish a dedicated, direct MongoClient instance with IPv4 fallback routing
const client = new MongoClient(process.env.MONGODB_URI, {
  family: 4,
});

export const auth = betterAuth({
  // Bind the direct client instance and specify target database directly to the adapter
  database: mongodbAdapter(client.db("EasyTools"), {
    client,
  }),

  // Cryptographic token signing secret key
  secret: process.env.BETTER_AUTH_SECRET,

  // Explicitly configure production and local fallback server URLs
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",

  // Setup email/password credentials with strict authentication guidelines
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },

  // Map OAuth social identity providers to credentials from environment variables
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },

  // Append customized schema properties directly onto the user document structure
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
        input: true,
      },
    },
  },

  // Handle dynamic routing correctly since the path is structured under [...all]
  advanced: {
    prefix: "/api/auth",
  },
});