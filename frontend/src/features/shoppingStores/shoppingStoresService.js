import axios from 'axios';

const API_URL = '/api/shoppingStores/';

// Create new store
const createShoppingStore = async (shoppingStoreData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.post(API_URL, shoppingStoreData, config);

	return response.data;
};

// Get user shopping store
const getShoppingStores = async token => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.get(API_URL, config);

	return response.data;
};

// Update user shopping store
const updateShoppingStore = async (storeId, shoppingStoreData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.put(
		API_URL + storeId,
		shoppingStoreData,
		config
	);

	return response.data;
};

// Delete user shopping store
const deleteShoppingStore = async (storeId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.delete(API_URL + storeId, config);

	return response.data;
};

const shoppingStoresService = {
	createShoppingStore,
	getShoppingStores,
	updateShoppingStore,
	deleteShoppingStore
};

export default shoppingStoresService;
