import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

/**
 * This is the authentication router.
 * @type {Object}
 */

const authRouter = Router();


authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/sign-out", signOut);


export default authRouter;
