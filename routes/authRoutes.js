import { Router } from "express";
import { registerController } from "../controllers/auth/registerController.js";
import { loginController } from "../controllers/auth/loginController.js";
import { refreshAuthController } from "../controllers/auth/refreshAuthController.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/refresh", refreshAuthController);

export default router;
