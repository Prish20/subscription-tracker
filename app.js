import express from 'express';
import { PORT } from './config/env.js';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';


const app = express();

/**
 * Middleware to parse incoming requests with JSON payloads.
 * Middleware to parse incoming requests with URL-encoded payloads.
 * Middleware to parse incoming cookie headers.
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Route handling authentication.
 * Route handling user related requests.
 * Route handling subscription related requests.
 * @type {express.Router}
 */
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);



/**
 * Middleware to handle errors.
 * @type {Function}
 */
app.use(errorMiddleware);

/**
 * Default test route.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {void}
 */
app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracker API!');
});


/**
 * Start the Express server.
 * @param {Number} PORT - The port number to listen on.
 * @returns {void}
 */
app.listen(PORT, async () => {
    console.log(`Subscription Tracker is running on http://localhost:${PORT}`);
    await connectToDatabase();
});

export default app;
