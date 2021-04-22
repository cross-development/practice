//HOC
import withTheme from 'helpers/hoc/withTheme';
//Helpers
import { IContext } from 'helpers/interfaces';
//Styles
import styles from './ThemeSwitcher.module.css';

interface IProps {
	ctxTheme: IContext;
}

const ThemeSwitcher = ({ ctxTheme }: IProps) => {
	const { theme, onToggleTheme } = ctxTheme;

	return (
		<div className={styles.themeSelector}>
			<span className={styles.label}>Theme: {theme}</span>
			<label className={styles.switch}>
				<input
					type="checkbox"
					checked={theme === 'dark'}
					onChange={onToggleTheme}
				/>
				<span className={styles.slider}></span>
			</label>
		</div>
	);
};

export default withTheme(ThemeSwitcher);
