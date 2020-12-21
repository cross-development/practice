//Core
import React from 'react';
//Components
import Tabs from './components/Tabs/Tabs';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
//Styles
import theme from './components/theme';

const App = () => (
	<MuiThemeProvider theme={theme}>
		<Tabs />
	</MuiThemeProvider>
);

export default App;
