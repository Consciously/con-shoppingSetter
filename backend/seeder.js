import fs from 'fs';
import { URL } from 'url';
import dotenv from 'dotenv';
import colors from 'colors';
import { connectDB } from './config/db.js';

// Paths
const dirEnv = new URL('./config/config.env', import.meta.url).pathname;
const dirData = new URL('data', import.meta.url).pathname;

// Connect to db
dotenv.config({ path: dirEnv });
connectDB();

// Load models
import ShoppingItem from './models/shoppingItemModel.js';
import ShoppingStore from './models/shoppingStoreModel.js';

// Read json files
const shoppingItem = JSON.parse(
	fs.readFileSync(`${dirData}/shoppingItemData.json`, 'utf-8')
);

const shoppingStore = JSON.parse(
	fs.readFileSync(`${dirData}/shoppingStoreData.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
	try {
		await ShoppingItem.create(shoppingItem);
		await ShoppingStore.create(shoppingStore);
		console.log('Data Imported...'.green.inverse);
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

// Delete data
const deleteData = async () => {
	try {
		await ShoppingItem.deleteMany();
		await ShoppingStore.deleteMany();

		console.log('Data destroyed...'.red.inverse);
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

if (process.argv[2] === '-i') {
	importData();
} else if (process.argv[2] === '-d') {
	deleteData();
} else {
	process.exit(1);
}
