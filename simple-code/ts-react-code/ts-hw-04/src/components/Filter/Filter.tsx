//Styles
import styles from './Filter.module.css';

interface IProps {
	title?: string | '';
	value: string;
	onChangeFilter: (value: string) => void;
}

const Filter = ({ title, value, onChangeFilter }: IProps) => (
	<div className={styles.filterWrapper}>
		<label>
			{title}

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
export default Filter;
