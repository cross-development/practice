//Core
import { ChangeEvent } from 'react';
//HOC
import withTheme from 'helpers/hoc/withTheme';
//Helpers
import { IContext } from 'helpers/interfaces';
//Styles
import styles from './Filter.module.css';

interface IProps {
	value: string;
	ctxTheme: IContext;
	onChangeFilter: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ value, ctxTheme, onChangeFilter }: IProps) => {
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
					onChange={onChangeFilter}
				/>
			</label>
		</div>
	);
};

export default withTheme(Filter);
