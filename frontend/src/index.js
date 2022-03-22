import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Layout from './components/UI/Layout/Layout';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<Layout>
					<App />
				</Layout>
			</Provider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
