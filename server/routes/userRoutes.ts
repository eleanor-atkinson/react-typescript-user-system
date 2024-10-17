import { Router } from 'express';
import { registerUser, getUserProfile } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.get('/:id', getUserProfile);

export default router;
