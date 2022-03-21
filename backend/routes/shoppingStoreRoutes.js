import express from 'express';
import {
	getStores,
	createStore,
	updateStore,
	deleteStore
} from '../controllers/shoppingStoreControllers.js';

import shoppingItemsRouter from './shoppingItemRoutes.js';

const router = express.Router();

// Re-route into other resource routers
router.use('/:storeId/items', shoppingItemsRouter);

router.route('/').get(getStores).post(createStore);
router.route('/:id').put(updateStore).delete(deleteStore);

export default router;
