import express from "express";
import {
  getCategory,
  postCategory,
  getProductByCategory,
} from "../controllers/categoryController.js";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
  superAdminMiddleware,
} from "../middleware/UserMiddleware.js";

router.get("/", getCategory);
router.get("/:id", getProductByCategory);
router.post("/", authMiddleware, superAdminMiddleware, postCategory);

export default router;
