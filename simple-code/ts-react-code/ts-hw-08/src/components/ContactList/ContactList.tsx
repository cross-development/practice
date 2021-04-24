//Core
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Redux
import { connect } from 'react-redux';
import contactsAction from 'redux/contacts/contactsAction';
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

const ContactList = ({ contacts, onRemoveContact }: IProps) =>
	contacts.length > 0 && (
		<TransitionGroup component="ul" className={styles.list}>
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

const mapStateToProps = ({ contacts }) => {
	const { items, filter } = contacts;
	const normalizedFilter = filter.toLowerCase();

	return {
		contacts: items.filter(({ name }) =>
			name.toLowerCase().includes(normalizedFilter),
		),
	};
};

const mapDispatchToProps = {
	onRemoveContact: contactsAction.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
