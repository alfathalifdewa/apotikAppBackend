import express from "express";
import {
  getProducts,
  getProductsById,
  postProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import {
  adminMiddleware,
  authMiddleware,
  superAdminMiddleware,
} from "../middleware/UserMiddleware.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:productName", getProductsById);
router.post("/", authMiddleware, adminMiddleware, postProducts);
router.put("/:id", authMiddleware, adminMiddleware, updateProduct);
router.delete("/:id", authMiddleware, superAdminMiddleware, deleteProduct);

export default router;
