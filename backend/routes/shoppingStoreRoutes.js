import express from 'express';
import {
	getStores,
	createStore,
	updateStore,
	deleteStore
} from '../controllers/shoppingStoreControllers.js';

import { auth } from '../middleware/authMiddleware.js';

import shoppingItemsRouter from './shoppingItemRoutes.js';

const router = express.Router();

// Re-route into other resource routers
router.use('/:storeId/items', shoppingItemsRouter);

router.route('/').get(auth, getStores).post(auth, createStore);
router.route('/:id').put(auth, updateStore).delete(auth, deleteStore);

export default router;
