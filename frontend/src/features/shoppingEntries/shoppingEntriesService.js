import axios from 'axios';

const API_URL = '/api/shoppingStores/';

// add shopping entries
const addShoppingEntry = async (token, storeId) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.post(API_URL + storeId + '/items', config);

	return response.data;
};

const shoppingEntries = {
	addShoppingEntry
};

export default shoppingEntries;
