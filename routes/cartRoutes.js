import express from 'express';
import { addToCart, getCart, updateCart } from '../controllers/cartController.js';
import { authMiddleware } from '../middleware/UserMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getCart);
router.post('/', authMiddleware, addToCart);
router.put('/update', authMiddleware, updateCart);

export default router;