//Core
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Components
import ContactListItem from './ContactListItem';
//Helpers
import { TContact } from 'helpers/types';
//Styles
import styles from './ContactList.module.css';
import fadeContactList from 'animation/fadeContactList.module.css';

interface IProps {
	contacts: TContact[];
	onRemoveContact: (id: string) => void;
}

const ContactList = ({ contacts, onRemoveContact }: IProps) => (
	<TransitionGroup component="ul" className={styles.contactList}>
		{contacts.map(contact => (
			<CSSTransition
				timeout={250}
				key={contact.id}
				classNames={fadeContactList}
			>
				<ContactListItem contact={contact} onRemove={onRemoveContact} />
			</CSSTransition>
		))}
	</TransitionGroup>
);

export default ContactList;
