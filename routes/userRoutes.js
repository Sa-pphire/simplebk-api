import { Router } from "express";
import passport from '../middlewares/passport/index.js';
import authController from "../controllers/authController/index.js";


const router = Router();

router.post('/signup', authController.signup)

router.post('/login', passport.authenticate('local'), authController.login)

router.post('/logout', authController.logout)


export default router;
