import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

/**
 * Check if the MONGODB_URI environment variable is defined
 * @throws {Error} Throws an error if the MONGODB_URI environment variable is not defined
 */
if (!DB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.<development/production>.local");
}

/**
 * Connect to the MongoDB database
 * @returns {Promise<void>}
 * @throws {Error} Throws an error if the connection to the database fails
 */
const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in ${NODE_ENV} mode`);
    } catch (error) {
        console.error("Error connecting to database: ", error);
        process.exit(1);
    }
};

export default connectToDatabase;
