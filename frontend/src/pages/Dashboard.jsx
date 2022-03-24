import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../features/auth/authSlice';
import ShoppingLists from '../components/ShoppingLists';

function Dashboard() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}

		return () => {
			dispatch(reset());
		};
	}, [user, navigate, dispatch]);

	return (
		<>
			<section className='heading'>
				<div className='container'>
					<h1>Welcome {user && user.name}</h1>
					<p>Shopping Dashboard</p>
				</div>
			</section>
			<section className='content'>
				<div className='container'>
					<div className='content__inner'>
						<ShoppingLists />
					</div>
				</div>
			</section>
		</>
	);
}

export default Dashboard;
