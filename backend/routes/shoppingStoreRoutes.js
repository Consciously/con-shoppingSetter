import express from 'express';
import {
	getStores,
	createStore,
	updateStore,
	deleteStore
} from '../controllers/shoppingStoreControllers.js';

const router = express.Router();

router.route('/').get(getStores).post(createStore);
router.route('/:id').put(updateStore).delete(deleteStore);

export default router;
