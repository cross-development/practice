//HOC
import withTheme from 'helpers/hoc/withTheme';
//Styles
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onRemove, ctxTheme }) => {
	const { theme, themeStyle } = ctxTheme;
	const mainThemeStyle = theme === 'dark' ? themeStyle.dark : themeStyle.light;

	return (
		<li className={styles.listItem} style={mainThemeStyle}>
			<p className={styles.contact}>
				<span>{name}:</span> {number}
			</p>
			<button type="button" className={styles.button} onClick={onRemove}>
				&#10006;
			</button>
		</li>
	);
};

export default withTheme(ContactListItem);
