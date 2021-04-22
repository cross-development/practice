//Core
import React, { Component, createContext, ReactNode } from 'react';
//Helpers
import { IContext } from 'helpers/interfaces';

interface IProps {
	children: ReactNode;
}

interface IState extends IContext {}

const Context = createContext<IContext | null>(null);

const themeConfig = {
	light: {
		backgroundColor: '#ffffff',
		color: '#000000',
	},

	dark: {
		backgroundColor: '#212121',
		color: '#ffffff',
		border: '1px solid #ffffff',
	},
};

export default class ThemeContext extends Component<IProps, IState> {
	static Consumer = Context.Consumer;

	componentDidMount() {
		const existTheme = localStorage.getItem('theme');

		if (existTheme) {
			this.setState({ theme: JSON.parse(existTheme) });
		}
	}

	componentDidUpdate(prevProps: IProps, prevState: IState) {
		if (prevState.theme !== this.state.theme) {
			localStorage.setItem('theme', JSON.stringify(this.state.theme));
		}
	}

	toggleTheme = (): void =>
		this.setState({ theme: this.state.theme === 'dark' ? 'light' : 'dark' });

	state: IState = {
		theme: 'light',
		themeStyle: themeConfig,
		onToggleTheme: this.toggleTheme,
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}
