import express from 'express';
import { PORT } from './config/env.js';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';


const app = express();


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);



/**
 * This is the default route of the application.
 * It returns a welcome message to the user.
 */
app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracker API!');
});

/**
 * This is the entry point of the application.
 * It listens to port 3000 and logs the message to the console.
 */
app.listen(PORT, () => {
  console.log(`Subscription Tracker is running on http://localhost:${PORT}`);
});

export default app;
