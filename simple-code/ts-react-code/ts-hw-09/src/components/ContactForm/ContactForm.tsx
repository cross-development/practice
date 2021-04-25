//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import { Notification } from 'components/Commons';
//Redux
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
//Styles
import styles from './ContactForm.module.css';
import { CSSTransition } from 'react-transition-group';
import fadeNotification from 'animation/fadeNotification.module.css';

export class ContactForm extends Component {
	static propTypes = {
		onAddContact: PropTypes.func.isRequired,
	};

	state = {
		name: '',
		number: '',
		isNotice: false,
	};

	setNotificationTimeout = delay =>
		setTimeout(() => this.setState({ isNotice: false }), delay);

	handleChange = ({ target: { name, value } }) =>
		this.setState({ [name]: value });

	handleFormSubmit = e => {
		e.preventDefault();

		const { name, number } = this.state;
		const { contacts, onAddContact } = this.props;

		const isContactExists = contacts.find(
			contact => contact.name.toLowerCase() === name.toLowerCase(),
		);

		if (isContactExists) {
			this.setState({ name: '', number: '', isNotice: true });
			return this.setNotificationTimeout(1000);
		}

		onAddContact({ name, number });
		this.setState({ name: '', number: '' });
	};

	render() {
		const { name, number, isNotice } = this.state;

		return (
			<>
				<CSSTransition
					in={isNotice}
					classNames={fadeNotification}
					timeout={250}
					unmountOnExit
				>
					<Notification />
				</CSSTransition>

				<form className={styles.form} onSubmit={this.handleFormSubmit}>
					<label>
						Name
						<input
							className={styles.input}
							required
							autoFocus
							type="text"
							name="name"
							value={name}
							autoComplete="off"
							onChange={this.handleChange}
						/>
					</label>

					<label>
						Number
						<input
							className={styles.input}
							required
							type="text"
							name="number"
							value={number}
							autoComplete="off"
							onChange={this.handleChange}
						/>
					</label>

					<button className={styles.button} type="submit">
						Add contact
					</button>
				</form>
			</>
		);
	}
}

const mapStateToProps = state => ({
	contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
	onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
