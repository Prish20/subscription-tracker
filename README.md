# Subscription Tracker

## Overview

Subscription Tracker is an Express.js-based REST API designed to help users manage and monitor their subscriptions. It includes features like user authentication, subscription tracking, email reminders for subscription renewals, and advanced security features such as bot detection and rate limiting using ArcJet. The project integrates several external tools and services, including MongoDB, Nodemailer, and Upstash workflows, to deliver a robust subscription management solution.

---

## Features

- **User Management:**

  - Sign-up, sign-in, and sign-out functionality.
  - Authorization and authentication using JWT.

- **Subscription Management:**

  - Create, update, delete, and view subscriptions.
  - Categorization by type, frequency, and payment methods.
  - Automatic status updates for expired subscriptions.

- **Email Notifications:**

  - Automated reminder emails for upcoming subscription renewals.
  - Customizable email templates.

- **Workflow Integration:**

  - Renewal reminders triggered using Upstash workflows.

- **Security:**

  - ArcJet middleware for bot detection and rate limiting.
  - Error handling for secure and user-friendly responses.

- **Database:**

  - MongoDB for data persistence.

---

## Project Structure

```bash
prish20-subscription-tracker/
├── app.js
├── eslint.config.mjs
├── package.json
├── config/
│   ├── arcjet.js
│   ├── env.js
│   ├── nodemailer.js
│   └── upstash.js
├── controllers/
│   ├── auth.controller.js
│   ├── subscription.controller.js
│   ├── user.controller.js
│   └── workflow.controller.js
├── database/
│   └── mongodb.js
├── middlewares/
│   ├── arcjet.middleware.js
│   ├── auth.middleware.js
│   └── error.middleware.js
├── models/
│   ├── subscription.model.js
│   └── user.model.js
├── routes/
│   ├── auth.routes.js
│   ├── subscription.routes.js
│   ├── user.routes.js
│   └── workflow.routes.js
└── utils/
    ├── email-template.js
    └── send-email.js
```

---

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your system.
- MongoDB server instance.

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd prish20-subscription-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create `.env.development.local` and `.env.production.local` files with the following keys:

   ```env
   PORT=3000
   SERVER_URL=http://localhost:3000
   NODE_ENV=development
   DB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   JWT_EXPIRES_IN=1d
   ARCJET_KEY=<your-arcjet-key>
   QSTASH_URL=<your-upstash-url>
   QSTASH_TOKEN=<your-upstash-token>
   EMAIL_PASSWORD=<your-email-password>
   ```

4. Start the server:

   - Development:

     ```bash
     npm run dev
     ```

   - Production:

     ```bash
     npm run start
     ```

5. Access the API:
   Navigate to `http://localhost:3000`.

---

## API Endpoints

### Authentication

- `POST /api/v1/auth/sign-up`: Sign up a new user.
- `POST /api/v1/auth/sign-in`: Sign in an existing user.
- `POST /api/v1/auth/sign-out`: Sign out a user.

### User

- `GET /api/v1/users`: Get all users.
- `GET /api/v1/users/:id`: Get a specific user.

### Subscription

- `POST /api/v1/subscriptions`: Create a new subscription (requires authentication).
- `GET /api/v1/subscriptions/user/:id`: Get subscriptions for a user (requires authentication).
- Additional endpoints for updating, deleting, and canceling subscriptions are placeholders and can be implemented as needed.

### Workflow

- `POST /api/v1/workflows/subscription/reminder`: Trigger subscription renewal reminders.

---

## Technologies Used

### Backend

- **Node.js** and **Express.js**: For server-side logic and API creation.
- **MongoDB** and **Mongoose**: For database management.

### Security

- **JWT**: For user authentication and authorization.
- **ArcJet**: For bot detection and rate limiting.

### Email Service

- **Nodemailer**: For sending email notifications.

### Workflow Management

- **Upstash**: For subscription renewal reminders.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Open a pull request.

---
