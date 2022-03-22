import asyncHandler from 'express-async-handler';

// @desc Register new user
// @route GET /api/shoppingUsers/register
// @access Public

const registerShoppingUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User registered' });
});

// @desc Authenticate a user
// @route GET /api/shoppingUsers/login
// @access Public

const loginShoppingUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User logged in' });
});

// @desc Get user data
// @route GET /api/shoppingUsers/me
// @access private

const getMe = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User found' });
});

export { registerShoppingUser, loginShoppingUser, getMe };
