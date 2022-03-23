import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import shoppingStoreReducer from '../features/shoppingStore/shoppingStoreSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		shoppingStore: shoppingStoreReducer
	}
});
