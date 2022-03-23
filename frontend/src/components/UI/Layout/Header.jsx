import { Link } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

function Header() {
	return (
		<header className='main__header'>
			<div className='main__header__logo'>
				<Link to='/'>Shopping Setter</Link>
			</div>
			<nav className='main__navbar'>
				<ul>
					<li>
						<button className='btn'>
							<FaSignOutAlt /> Logout
						</button>
					</li>
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
				</ul>
			</nav>
		</header>
	);
}

export default Header;
