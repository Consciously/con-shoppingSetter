import asyncHandler from 'express-async-handler';
import ShoppingItem from '../models/shoppingItemModel.js';
import ShoppingStore from '../models/shoppingStoreModel.js';

// @desc Get all shopping list items
// @route GET /api/shoppingStores/:storeId/items
// @access private

const getShoppingItems = asyncHandler(async (req, res) => {
	const shoppingItems = await ShoppingItem.find({
		store: req.params.storeId
	}).populate({
		path: 'store',
		select: ['store']
	});

	// const shoppingItemsModified = shoppingItems.reduce(
	// 	(entries, value, _, arr) => {
	// 		console.log(value); /* ({
	// 		...entries,
	// 		// store: value.store,
	// 		entries: [...arr, value.entry]
	// 	}) */
	// 	},
	// 	[]
	// );

	const shoppingItemsModified = shoppingItems
		.map(({ store, entry }) => ({
			store,
			entry
		}))
		.reduce((groupedStores, item) => {
			if (!groupedStores[item.store._id]) {
				groupedStores[item.store._id] = [];
			}

			groupedStores[item.store._id].push(item.entry);
			return groupedStores;
		}, {});

	res.status(200).json({
		count: shoppingItemsModified.length,
		data: shoppingItemsModified
	});
});

// @desc Create new shopping items
// @route POST /api/shoppingStore/:storeId/items
// @access private

const createShoppingItem = asyncHandler(async (req, res) => {
	if (!req.body.entry) {
		res.status(400);
		throw new Error('Please add an entry field');
	}

	req.body.store = req.params.storeId;

	const shoppingItem = await ShoppingItem.create({
		entry: req.body.entry,
		store: req.body.store
	});

	res.status(200).json(shoppingItem);
});

// @desc Update shopping item
// @route PUT /api/shoppingStore/:storeId/items
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

	res.status(200).json({ data: updatedShoppingItem });
});

// @desc Delete shopping item
// @route DELETE /api/shoppingStore/:storeId/items
// @access private

const deleteShoppingItem = asyncHandler(async (req, res) => {
	const shoppingItem = await ShoppingItem.findById(req.params.id);

	if (!shoppingItem) {
		res.status(400);
		throw new Error('Shopping item not found');
	}

	await ShoppingItem.findByIdAndRemove(req.params.id);

	res.status(200).json({ data: req.params.id });
});

export {
	getShoppingItems,
	createShoppingItem,
	updateShoppingItem,
	deleteShoppingItem
};
