import express from 'express';
import dontenv from 'dotenv/config';
import colors from 'colors';
import shoppingRouter from './routes/shoppingRoutes.js';

const port = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/shopping', shoppingRouter);

app.listen(port, () =>
	console.log(`Server running on port ${port} in ${mode} mode`)
);
