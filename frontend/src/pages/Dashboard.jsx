import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
	getShoppingStore,
	reset
} from '../features/shoppingStore/shoppingStoreSlice';

function Dashboard() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);
	const { shoppingStore, isLoading, isError, message } = useSelector(
		state => state.shoppingStore
	);

	console.log(shoppingStore);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (!user) {
			navigate('/login');
		}

		dispatch(getShoppingStore());
	}, [user, navigate]);

	return (
		<>
			<section className='heading'>
				<h1>Welcome {user && user.name}</h1>
				<p>Shopping Dashboard</p>
			</section>
			<section className='content'></section>
		</>
	);
}

export default Dashboard;
