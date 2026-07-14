import { MongoClient } from "mongodb";
import dns from "node:dns";

// Enforce reliable DNS servers to resolve MongoDB Atlas connection issues
dns.setServers(["1.1.1.1", "8.8.8.8"]);

if (!process.env.MONGODB_URI) {
  throw new Error("Missing MONGODB_URI environment variable in .env.local");
}

const uri = process.env.MONGODB_URI;

// Enforce IPv4 connection pool to bypass local ISP network routing drops
const options = {
  family: 4,
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Use a global variable to prevent multiple client connections during Next.js hot-reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Standard production database connection pipeline
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;