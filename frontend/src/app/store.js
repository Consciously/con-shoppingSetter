import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import shoppingStoresReducer from '../features/shoppingStores/shoppingStoresSlice';
import shoppingEntriesReducer from '../features/shoppingEntries/shoppingEntriesSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		shoppingStores: shoppingStoresReducer,
		shoppingEntries: shoppingEntriesReducer
	}
});
