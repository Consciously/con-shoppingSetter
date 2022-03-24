import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import shoppingStoresService from './shoppingStoresService';

const initialState = {
	shoppingStores: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// Get user shopping stores
export const getShoppingStores = createAsyncThunk(
	'shoppingStores/getAll',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await shoppingStoresService.getShoppingStores(token);
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

export const shoppingStoresSlice = createSlice({
	name: 'shoppingsStores',
	initialState,
	reducers: {
		reset: state => state.initialState
	},
	extraReducers: builder => {
		builder
			.addCase(getShoppingStores.pending, state => {
				state.isLoading = true;
			})
			.addCase(getShoppingStores.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.shoppingStores = action.payload;
			})
			.addCase(getShoppingStores.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	}
});

export const { reset } = shoppingStoresSlice.actions;
export default shoppingStoresSlice.reducer;
