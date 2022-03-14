import express from 'express';
import {
	getShoppingItems,
	createShoppingItem,
	updateShoppingItem,
	deleteShoppingItem
} from '../controllers/shoppingControllers.js';

const router = express.Router();

router.route('/').get(getShoppingItems).post(createShoppingItem);
router.route('/:id').put(updateShoppingItem).delete(deleteShoppingItem);

export default router;
