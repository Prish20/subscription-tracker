import express from 'express';
import {PORT} from './config/env.js';

const app = express();

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
