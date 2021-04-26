//Components
import ContactListItem from './ContactListItem';
//Redux
import { connect } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
//Helpers
import { TContact, IStoreState } from 'helpers/ts-helpers';
//Styles
import styles from './ContactList.module.css';
import fadeContactList from 'animation/fadeContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface IProps {
	contacts: TContact[];
}

const ContactList = ({ contacts }: IProps) => (
	<TransitionGroup component="ul" className={styles.contactList}>
		{contacts.map(({ id, ...contactInfo }) => (
			<CSSTransition key={id} timeout={250} classNames={fadeContactList}>
				<ContactListItem id={id} {...contactInfo} />
			</CSSTransition>
		))}
	</TransitionGroup>
);

const mapStateToProps = (state: IStoreState) => ({
	contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
