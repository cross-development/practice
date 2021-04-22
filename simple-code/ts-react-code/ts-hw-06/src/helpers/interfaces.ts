//Helpers
import { TDarkTheme, TLightTheme } from './types';

interface IThemeStyles {
	light: TLightTheme;
	dark: TDarkTheme;
}

export interface IContext {
	theme: 'light' | 'dark';
	themeStyle: IThemeStyles;
	onToggleTheme: () => void;
}
