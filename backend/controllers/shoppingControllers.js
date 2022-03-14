// @desc Get all shopping list items
// @route GET /api/shopping
// @access private

const getShoppingItems = (req, res) => {
	res.status(200).json({ message: 'Get all shopping items' });
};

// @desc Create new shopping items
// @route POST /api/shopping
// @access private

const createShoppingItem = (req, res) => {
	res.status(200).json({ message: 'Create shopping item' });
};

// @desc Update shopping item
// @route PUT /api/shopping/:id
// @access private

const updateShoppingItem = (req, res) => {
	res.status(200).json({ message: 'Update shopping item' });
};

// @desc Delete shopping item
// @route DELETE /api/shopping/:id
// @access private

const deleteShoppingItem = (req, res) => {
	res.status(200).json({ message: 'Delete shopping item' });
};

export {
	getShoppingItems,
	createShoppingItem,
	updateShoppingItem,
	deleteShoppingItem
};
