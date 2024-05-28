import express from 'express';
import { getProducts, postProducts } from '../controllers/productController.js';
import { adminMiddleware, authMiddleware } from '../middleware/UserMiddleware.js';
const router = express.Router();

router.get('/', getProducts);
router.post('/', authMiddleware, adminMiddleware, postProducts);

export default router;