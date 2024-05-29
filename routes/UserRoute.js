import express from 'express';
import { register, login, getUsers } from '../controllers/UserController.js';
import { authMiddleware } from '../middleware/UserMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', authMiddleware, getUsers);

export default router;
