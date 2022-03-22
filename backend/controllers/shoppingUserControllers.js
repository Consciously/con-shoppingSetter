import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ShoppingUser from '../models/shoppingUserModel.js';

// @desc Register new user
// @route GET /api/shoppingUsers/register
// @access Public

const registerShoppingUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400);
		throw new Error('Please add all fields');
	}

	// Check if user exists
	const shoppingUserExists = await ShoppingUser.findOne({ email });

	if (shoppingUserExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Create User
	const shoppingUser = await ShoppingUser.create({
		name,
		email,
		password: hashedPassword
	});

	if (shoppingUser) {
		res.status(201).json({
			_id: shoppingUser.id,
			name: shoppingUser.name,
			email: shoppingUser.email,
			token: generateToken(shoppingUser._id)
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

// @desc Authenticate a user
// @route GET /api/shoppingUsers/login
// @access Public

const loginShoppingUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400);
		throw new Error('Please add all fields');
	}

	// Check for user email
	const shoppingUser = await ShoppingUser.findOne({ email });

	if (shoppingUser && (await bcrypt.compare(password, shoppingUser.password))) {
		res.json({
			_id: shoppingUser.id,
			name: shoppingUser.name,
			email: shoppingUser.email,
			token: generateToken(shoppingUser._id)
		});
	} else {
		res.status(400);
		throw new Error('Invalid credentials');
	}
});

// @desc Get user data
// @route GET /api/shoppingUsers/me
// @access private

const getMe = asyncHandler(async (req, res) => {});

export { registerShoppingUser, loginShoppingUser, getMe };

// Generate JWT
const generateToken = id => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d'
	});
};
