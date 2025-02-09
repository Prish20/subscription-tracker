import { config } from "dotenv";

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 * This is a good place to load environment variables.
 * @type {Object}
 * @see {@link https://www.npmjs.com/package/dotenv|dotenv}
 */
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

/**
 * Export environment variables
 * @type {Object}
 * @property {string} PORT - Port number
 * @property {string} NODE_ENV - Environment
 * @see {@link https://nodejs.org/api/process.html#process_process_env|process.env}
 */
export const {
    PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
} = process.env;
