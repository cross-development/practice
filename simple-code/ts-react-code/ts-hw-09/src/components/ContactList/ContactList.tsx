//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import ContactListItem from './ContactListItem';
//Redux
import { connect } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
//Styles
import styles from './ContactList.module.css';
import fadeContactList from 'animation/fadeContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ContactList = ({ contacts }) => (
	<TransitionGroup component="ul" className={styles.contactList}>
		{contacts.map(({ id, ...contactInfo }) => (
			<CSSTransition key={id} timeout={250} classNames={fadeContactList}>
				<ContactListItem id={id} {...contactInfo} />
			</CSSTransition>
		))}
	</TransitionGroup>
);

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

const mapStateToProps = state => ({
	contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
