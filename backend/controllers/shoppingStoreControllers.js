import asyncHandler from 'express-async-handler';
import ShoppingStore from '../models/shoppingStoreModel.js';

// @desc Get all stores
// @route GET /api/shopping/stores
// @access private

const getStores = asyncHandler(async (req, res) => {
	const shoppingStore = await ShoppingStore.find().populate({
		path: 'items',
		select: ['entry', '-store']
	});

	res.status(200).json(shoppingStore);
});

// @desc Create new store
// @route POST /api/shopping/store
// @access private

const createStore = asyncHandler(async (req, res) => {
	if (!req.body.store) {
		res.status(400);
		throw new Error('Please add store a field');
	}

	// const store = await Store.create({
	// 	store: req.body.store,
	// 	items: shoppingItems._id
	// });

	res.status(200).json(store);
});

// @desc Update store
// @route PUT /api/shopping/stores/:id
// @access private

const updateStore = asyncHandler(async (req, res) => {
	const store = await Store.findById(req.params.id);

	if (!store) {
		res.status(400);
		throw new Error('Store not found');
	}

	const updatedStore = await Store.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	});

	res.status(200).json(updatedStore);
});

// @desc Delete store
// @route DELETE /api/shopping/stores/:id
// @access private

const deleteStore = asyncHandler(async (req, res) => {
	const store = await Store.findById(req.params.id);

	if (!store) {
		res.status(400);
		throw new Error('Store not found');
	}

	await Store.findByIdAndRemove(req.params.id);

	res.status(200).json({ id: req.params.id });
});

export { getStores, createStore, updateStore, deleteStore };
