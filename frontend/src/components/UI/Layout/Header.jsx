import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { logout, reset } from '../../../features/auth/authSlice';

function Header() {
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);

	const logoutHandler = () => {
		dispatch(logout());
		dispatch(reset());
	};

	return (
		<header className='main__header'>
			<div className='main__header__logo'>
				<Link to='/'>Shopping Setter</Link>
			</div>
			<nav className='main__navbar'>
				<ul>
					{user ? (
						<li>
							<button className='btn' onClick={logoutHandler}>
								<FaSignOutAlt /> Logout
							</button>
						</li>
					) : (
						<>
							<li>
								<Link to='/register'>
									<FaSignInAlt /> Register
								</Link>
							</li>
							<li>
								<Link to='/login'>
									<FaUser /> Login
								</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
