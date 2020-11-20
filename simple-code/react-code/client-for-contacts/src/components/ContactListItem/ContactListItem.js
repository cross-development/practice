//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import contactsOperations from 'redux/contacts/contactsOperations';
//Styles
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, email, phone, onRemove }) => (
	<li className={styles.listItem}>
		<p className={styles.contact}>
			<span>{name}:</span> {phone}
		</p>
		<button type="button" className={styles.button} onClick={onRemove}>
			&#10006;
		</button>
	</li>
);

ContactListItem.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	onRemove: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, { id }) => ({
	onRemove: () => dispatch(contactsOperations.removeContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
