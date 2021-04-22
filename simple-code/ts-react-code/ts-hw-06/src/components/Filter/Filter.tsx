//HOC
import withTheme from 'helpers/hoc/withTheme';
//Styles
import styles from './Filter.module.css';

const Filter = ({ value, ctxTheme, onChangeFilter }) => {
	const { theme, themeStyle } = ctxTheme;
	const mainThemeStyle = theme === 'dark' ? themeStyle.dark : themeStyle.light;

	return (
		<div className={styles.filter} style={mainThemeStyle}>
			<label>
				Find contacts by name
				<input
					type="text"
					value={value}
					autoComplete="off"
					className={styles.input}
					onChange={e => onChangeFilter(e.target.value)}
				/>
			</label>
		</div>
	);
};

export default withTheme(Filter);
