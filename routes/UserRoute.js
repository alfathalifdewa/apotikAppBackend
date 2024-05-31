import express from 'express';
import { register, login, getUsers, getAllUsers } from '../controllers/UserController.js';
import { adminMiddleware, authMiddleware, superAdminMiddleware } from '../middleware/UserMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getUsers);
router.get('/all', authMiddleware, superAdminMiddleware, getAllUsers);

export default router;
