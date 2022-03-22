import express from 'express';
import {
	registerShoppingUser,
	loginShoppingUser,
	getMe
} from '../controllers/shoppingUserControllers.js';

import { auth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/register').post(registerShoppingUser);
router.route('/login').post(loginShoppingUser);
router.route('/me').get(auth, getMe);

export default router;
