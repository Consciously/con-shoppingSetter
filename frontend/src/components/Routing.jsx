import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/Login';

function Routing() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
	);
}

export default Routing;
