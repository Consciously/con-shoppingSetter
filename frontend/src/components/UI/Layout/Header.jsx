import { Link } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

function Header() {
	return (
		<header className='main__header'>
			<nav className='main__navbar'>
				<ul>
					<li>
						<Link to='/'>Dashboard</Link>
					</li>
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
