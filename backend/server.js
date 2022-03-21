import express from 'express';
import { URL } from 'url';
import dotenv from 'dotenv';
import colors from 'colors';
import shoppingItems from './routes/shoppingItemRoutes.js';
import shoppingStores from './routes/shoppingStoreRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import { connectDB } from './config/db.js';

const dirEnv = new URL('./config/config.env', import.meta.url).pathname;

dotenv.config({ path: dirEnv });

connectDB();

const port = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;

// connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/shoppingItems', shoppingItems);
app.use('/api/shoppingStores', shoppingStores);

app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server running on port ${port} in ${mode} mode`)
);
