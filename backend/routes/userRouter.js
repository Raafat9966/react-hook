import express from "express";
import { login, register, logout } from "../controllers/userController.js";
import { userValidationRules, validate } from "../middleware/validator.js";
const router = express.Router();

router.post("/login", login);
router.post("/register", userValidationRules(), validate, register);
router.get("/logout", logout);

export default router;
