//Redux
import { connect } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
//Styles
import styles from './ContactListItem.module.css';

interface IProps {
	id: string;
	name: string;
	number: string;
	onRemove: () => void;
}

const ContactListItem = ({ id, name, number, onRemove }: IProps) => (
	<li className={styles.listItem}>
		<p className={styles.contact}>
			<span>{name}:</span> {number}
		</p>

		<button type="button" className={styles.button} onClick={onRemove}>
			&#10006;
		</button>
	</li>
);

type TOwnProps = { id: string };

const mapDispatchToProps = (dispatch, { id }: TOwnProps) => ({
	onRemove: () => dispatch(contactsOperations.removeContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
