import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './example2/components/App';
import { store } from '.example2/redux/store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
