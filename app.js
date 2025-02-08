import express from 'express';

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
 * It starts the server and listens on port 3000.
 */
app.listen(3000, () => {
  console.log('Subscription Tracker is running on http://localhost:3000');
});

export default app;
