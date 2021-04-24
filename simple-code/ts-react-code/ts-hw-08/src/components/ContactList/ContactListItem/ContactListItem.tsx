//Helpers
import { TContact } from 'helpers/types';
//Styles
import styles from './ContactListItem.module.css';

interface IProps {
	contact: TContact;
	onRemove: (id: string) => void;
}

const ContactListItem = ({ contact, onRemove }: IProps) => {
	const { id, name, number } = contact;

	return (
		<li className={styles.listItem}>
			<p className={styles.contact}>
				<span>{name}:</span> {number}
			</p>

			<button
				type="button"
				className={styles.button}
				onClick={() => onRemove(id)}
			>
				&#10006;
			</button>
		</li>
	);
};

export default ContactListItem;
