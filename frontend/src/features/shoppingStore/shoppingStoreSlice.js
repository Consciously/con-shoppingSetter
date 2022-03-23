import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import shoppingStoreService from './shoppingStoreService';

const initialState = {
	shoppingStore: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// Get user shopping store
export const getShoppingStore = createAsyncThunk(
	'shoppingStore/getAll',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await shoppingStoreService.getShoppingStore(token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const shoppingStoreSlice = createSlice({
	name: 'shoppingStore',
	initialState,
	reducers: {
		reset: state => initialState
	},
	extraReducers: builder => {
		builder
			.addCase(getShoppingStore.pending, state => {
				state.isLoading = true;
			})
			.addCase(getShoppingStore.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.shoppingStore = action.payload;
			})
			.addCase(getShoppingStore.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	}
});

export const { reset } = shoppingStoreSlice.actions;
export default shoppingStoreSlice.reducer;
