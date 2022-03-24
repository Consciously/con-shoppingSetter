import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import shoppingEntriesService from './shoppingEntriesService';

const initialState = {
	shoppingEntries: [],
	isLoading: false,
	isSuccess: false,
	isError: false,
	message: ''
};

// Get shoppingEntries
export const addShoppingEntries = createAsyncThunk(
	'shoppingEntries/addEntry',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;

			return await shoppingEntriesService.getShoppingEntries(token);
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

export const shoppingEntriesSlice = createSlice({
	name: 'shoppingEntries',
	initialState,
	reducers: {
		reset: state => state.initialState
	},
	extraReducers: builder => {
		builder
			.addCase(addShoppingEntries.pending, state => {
				state.isLoading = true;
			})
			.addCase(addShoppingEntries.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.addShoppingEntries = action.payload;
			})
			.addCase(addShoppingEntries.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	}
});

export const { reset } = shoppingEntriesSlice.actions;
export default shoppingEntriesSlice.reducer;
