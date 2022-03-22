import express from 'express';
import {
	getShoppingItems,
	createShoppingItem,
	updateShoppingItem,
	deleteShoppingItem
} from '../controllers/shoppingItemControllers.js';

import { auth } from '../middleware/authMiddleware.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(auth, getShoppingItems).post(auth, createShoppingItem);
router
	.route('/:id')
	.put(auth, updateShoppingItem)
	.delete(auth, deleteShoppingItem);

export default router;
