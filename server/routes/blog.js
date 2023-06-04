import express from "express";
const router = express.Router();
import AuthController from '../controllers/authController.js';


router.post("/user/register", AuthController.userRegisteration);
router.post("/user/login", AuthController.userLogin);

export default router;