//Redux
import { connect } from 'react-redux';
import contactsAction from 'redux/contacts/contactsAction';
//Helpers
import { TContact } from 'helpers/types';
//Styles
import styles from './Filter.module.css';

interface IProps {
	value: string;
	contacts: TContact[];
	onChangeFilter: (value: string) => void;
}

const Filter = ({ value, contacts, onChangeFilter }: IProps) =>
	contacts.length > 1 && (
		<div className={styles.filterWrapper}>
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

const mapStateToProps = ({ contacts }) => ({
	value: contacts.filter,
	contacts: contacts.items,
});

const mapDispatchToProps = {
	onChangeFilter: contactsAction.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
