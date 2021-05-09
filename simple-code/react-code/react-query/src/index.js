//Core
import ReactDOM from 'react-dom';
//Components
import App from 'components/App';
//Packages
import { QueryClientProvider, QueryClient } from 'react-query';
//Router
import { BrowserRouter } from 'react-router-dom';
//Styles
import 'styles/index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThemeProvider } from 'styled-components';
import preset from '@rebass/preset';

const queryClient = new QueryClient();

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={preset}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</QueryClientProvider>,
	document.getElementById('root'),
);
