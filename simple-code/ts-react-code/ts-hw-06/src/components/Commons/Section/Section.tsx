//HOC
import withTheme from 'helpers/hoc/withTheme';
//Styles
import styles from './Section.module.css';

const Section = ({ children, ctxTheme }) => {
	const { theme, themeStyle } = ctxTheme;
	const mainThemeStyle = theme === 'dark' ? themeStyle.dark : themeStyle.light;

	return (
		<section className={styles.section} style={mainThemeStyle}>
			{children}
		</section>
	);
};

export default withTheme(Section);
