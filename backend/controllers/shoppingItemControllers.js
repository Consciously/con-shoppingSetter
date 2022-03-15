import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import ShoppingItem from '../models/shoppingItemModel.js';
import ShoppingStore from '../models/shoppingStoreModel.js';

// @desc Get all shopping list items
// @route GET /api/shopping/items
// @access private

const getShoppingItems = asyncHandler(async (req, res) => {
	const shoppingItems = await ShoppingItem.find();

	res.status(200).json(shoppingItems);
});

// @desc Create new shopping items
// @route POST /api/shopping/items
// @access private

const createShoppingItem = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add a text field');
	}

	const shoppingItem = await ShoppingItem.create({
		text: req.body.text
	});

	res.status(200).json(shoppingItem);
});

// @desc Update shopping item
// @route PUT /api/shopping/items/:id
// @access private

const updateShoppingItem = asyncHandler(async (req, res) => {
	const shoppingItem = await ShoppingItem.findById(req.params.id);

	if (!shoppingItem) {
		res.status(400);
		throw new Error('Shopping item not found');
	}

	const updatedShoppingItem = await ShoppingItem.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);

	res.status(200).json(updatedShoppingItem);
});

// @desc Delete shopping item
// @route DELETE /api/shopping/items/:id
// @access private

const deleteShoppingItem = asyncHandler(async (req, res) => {
	const shoppingItem = await ShoppingItem.findById(req.params.id);

	if (!shoppingItem) {
		res.status(400);
		throw new Error('Shopping item not found');
	}

	await ShoppingItem.findByIdAndRemove(req.params.id);

	res.status(200).json({ id: req.params.id });
});

export {
	getShoppingItems,
	createShoppingItem,
	updateShoppingItem,
	deleteShoppingItem
};
