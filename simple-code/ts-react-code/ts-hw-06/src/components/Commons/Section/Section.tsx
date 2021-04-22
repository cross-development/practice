//Core
import { ReactNode } from 'react';
//HOC
import withTheme from 'helpers/hoc/withTheme';
//Helpers
import { IContext } from 'helpers/interfaces';
//Styles
import styles from './Section.module.css';

interface IProps {
	children: ReactNode;
	ctxTheme: IContext;
}

const Section = ({ children, ctxTheme }: IProps) => {
	const { theme, themeStyle } = ctxTheme;
	const mainThemeStyle = theme === 'dark' ? themeStyle.dark : themeStyle.light;

	return (
		<section className={styles.section} style={mainThemeStyle}>
			{children}
		</section>
	);
};

export default withTheme(Section);
