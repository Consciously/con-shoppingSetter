import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getShoppingStores,
	reset
} from '../features/shoppingStores/shoppingStoresSlice';
import { toast } from 'react-toastify';
import Spinner from './UI/Spinner';

import ShoppingList from './ShoppingList';

function ShoppingLists() {
	const dispatch = useDispatch();
	const { shoppingStores, isLoading, isError, message } = useSelector(
		state => state.shoppingStores
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		dispatch(getShoppingStores());

		return () => {
			dispatch(reset());
		};
	}, [isError, message, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			{shoppingStores.data &&
				shoppingStores.data.map(store => (
					<ShoppingList store={store} key={store._id} />
				))}
		</>
	);
}

export default ShoppingLists;
