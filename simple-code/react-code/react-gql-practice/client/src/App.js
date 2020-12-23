//Core
import React from 'react';
//Components
import Tabs from './components/Tabs/Tabs';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
//GraphQL
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//Styles
import theme from './components/theme';

const client = new ApolloClient({ uri: 'http://localhost:3005/graphql' });

const App = () => (
	<ApolloProvider client={client}>
		<MuiThemeProvider theme={theme}>
			<Tabs />
		</MuiThemeProvider>
	</ApolloProvider>
);

export default App;
