//Core
import { ChangeEvent } from 'react';
//Styles
import styles from './Filter.module.css';

interface IProps {
	value: string;
	onChangeFilter: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ value, onChangeFilter }: IProps) => (
	<div className={styles.filterWrapper}>
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

export default Filter;
