import express from 'express';
import {
	registerShoppingUser,
	loginShoppingUser,
	getMe
} from '../controllers/shoppingUserControllers.js';

const router = express.Router();

router.route('/register').post(registerShoppingUser);
router.route('/login').post(loginShoppingUser);
router.route('/me').get(getMe);

export default router;
