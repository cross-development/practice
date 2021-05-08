//Core
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
//Components
import App from 'components/App';
//Packages
import { QueryClientProvider, QueryClient } from 'react-query';
//Router
import { BrowserRouter as Router } from 'react-router-dom';
//Utils
import reportWebVitals from 'utils/reportWebVitals';
//Styles
import 'styles/index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThemeProvider } from 'styled-components';
import theme from '@rebass/preset';

const queryClient = new QueryClient();

ReactDOM.render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Router>
					<App />
				</Router>
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>,
	document.getElementById('root'),
);

reportWebVitals();
