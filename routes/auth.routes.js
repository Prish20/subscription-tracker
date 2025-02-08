import { Router } from "express";

/**
 * This is the authentication router.
 * @type {Object}
 */

const authRouter = Router();

/**
 * Express router for handling authentication operations.
 * @module authRouter
 *
 * @route POST /sign-up
 * @description Register a new user in the system
 * @returns {Object} Response containing registered user details
 *
 * @route POST /sign-in
 * @description Authenticate a user in the system
 * @returns {Object} Response containing user authentication details
 *
 * @route POST /sign-out
 * @description Deauthenticate a user in the system
 * @returns {Object} Response containing user deauthentication details
 */
authRouter.post("/sign-up", (req, res) => {
  res.send({ title: "Sign up" });
});
authRouter.post("/sign-in", (req, res) => {
  res.send({ title: "Sign in" });
});
authRouter.post("/sign-out", (req, res) => {
  res.send({ title: "Sign out" });
});


export default authRouter;
