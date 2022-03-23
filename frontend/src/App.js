import Routing from './components/Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<div className='container'>
				<Routing />
			</div>
			<ToastContainer />
		</>
	);
}

export default App;
