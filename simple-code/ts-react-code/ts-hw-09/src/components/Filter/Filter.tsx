//Core
import { ChangeEvent } from 'react';
//Redux
import { connect } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import contactsActions from 'redux/contacts/contactsActions';
//Helpers
import { IStoreState } from 'helpers/ts-helpers';
//Styles
import styles from './Filter.module.css';

interface IProps {
	value: string;
	onChangeFilter: (value: string) => void;
}

const Filter = ({ value, onChangeFilter }: IProps) => {
	const handleChange = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>): void => {
		onChangeFilter(value);
	};

	return (
		<div className={styles.filterWrapper}>
			<label>
				Find contacts by name
				<input
					type="text"
					value={value}
					autoComplete="off"
					onChange={handleChange}
					className={styles.input}
				/>
			</label>
		</div>
	);
};

const mapStateToProps = (state: IStoreState) => ({
	value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
	onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
