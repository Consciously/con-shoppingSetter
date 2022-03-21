import express from 'express';
import {
	getShoppingItems,
	createShoppingItem,
	updateShoppingItem,
	deleteShoppingItem
} from '../controllers/shoppingItemControllers.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(getShoppingItems).post(createShoppingItem);
router.route('/:id').put(updateShoppingItem).delete(deleteShoppingItem);

export default router;
