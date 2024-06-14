import express from "express";
import {
  checkoutCart,
  getOrder,
  updatePaymentStatus,
} from "../controllers/orderController.js"; // Adjust the path if necessary
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/UserMiddleware.js"; // assuming you have an authentication middleware

const router = express.Router();

router.get("/", authMiddleware, getOrder);
router.post("/checkout", authMiddleware, checkoutCart);
router.put(
  "/updateStatus",
  authMiddleware,
  adminMiddleware,
  updatePaymentStatus
);

export default router;
