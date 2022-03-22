import asyncHandler from 'express-async-handler';
import ShoppingStore from '../models/shoppingStoreModel.js';

// @desc Get all stores
// @route GET /api/shoppingStores
// @access private

const getStores = asyncHandler(async (req, res) => {
	const shoppingStore = await ShoppingStore.find().populate({
		path: 'items',
		select: ['entry', '-store']
	});

	res.status(200).json(shoppingStore);
});

// @desc Create new store
// @route POST /api/shoppingStores/:id
// @access private

const createStore = asyncHandler(async (req, res) => {
	if (!req.body.store) {
		res.status(400);
		throw new Error('Please add store a field');
	}

	const createdShoppingStore = await ShoppingStore.create({
		store: req.body.store
	});

	res.status(200).json({ data: createdShoppingStore });
});

// @desc Update store
// @route PUT /api/shoppingStores/:id
// @access private

const updateStore = asyncHandler(async (req, res) => {
	const store = await ShoppingStore.findById(req.params.id);

	if (!store) {
		res.status(400);
		throw new Error('Store not found');
	}

	const updatedShoppingStore = await ShoppingStore.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true
		}
	);

	res.status(200).json({ data: updatedShoppingStore });
});

// @desc Delete store
// @route DELETE /api/shoppingStores/:id
// @access private

const deleteStore = asyncHandler(async (req, res) => {
	const shoppingStore = await ShoppingStore.findById(req.params.id);

	if (!shoppingStore) {
		res.status(400);
		throw new Error('Store not found');
	}

	await ShoppingStore.findByIdAndRemove(req.params.id);

	res.status(200).json({ data: req.params.id });
});

export { getStores, createStore, updateStore, deleteStore };
