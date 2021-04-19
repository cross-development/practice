//Components
import ContactListItem from './ContactListItem';
//Helpers
import { TContact } from 'helpers/types';
//Styles
import styles from './ContactList.module.css';

interface IProps {
	contacts: TContact[];
	onRemoveContact: (id: string) => void;
}

const ContactList = ({ contacts, onRemoveContact }: IProps) => (
	<ul className={styles.list}>
		{contacts.map(({ id, name, number }) => (
			<ContactListItem
				key={id}
				name={name}
				number={number}
				onRemove={() => onRemoveContact(id)}
			/>
		))}
	</ul>
);

export default ContactList;
