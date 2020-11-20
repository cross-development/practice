//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
//Components
import Notification from '../Notification';
//Redux
import { connect } from 'react-redux';
import contactsSelectors from 'redux/contacts/contactsSelectors';
import contactsOperations from 'redux/contacts/contactsOperations';
//Styles
import styles from './ContactForm.module.css';
import fadeNotification from 'animation/fadeNotification.module.css';

export class ContactForm extends Component {
	static propTypes = {
		onAddContact: PropTypes.func.isRequired,
		contacts: PropTypes.arrayOf(
			PropTypes.exact({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				email: PropTypes.string.isRequired,
				phone: PropTypes.string.isRequired,
			}).isRequired,
		).isRequired,
	};

	state = {
		name: '',
		email: '',
		phone: '',
		isNotice: false,
	};

	setNotificationTimeout = delay => setTimeout(() => this.setState({ isNotice: false }), delay);

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	handleFormSubmit = e => {
		e.preventDefault();

		const {
			state: { name, email, phone },
			props: { contacts, onAddContact },
		} = this;

		const isContactExists = contacts.find(
			contact => contact.name.toLowerCase() === name.toLowerCase(),
		);

		if (isContactExists) {
			this.setState({ name: '', email: '', phone: '', isNotice: true });
			return this.setNotificationTimeout(1000);
		}

		onAddContact(name, email, phone);
		this.setState({ name: '', email: '', phone: '' });
	};

	render() {
		const { name, email, phone, isNotice } = this.state;

		return (
			<>
				<CSSTransition in={isNotice} timeout={250} unmountOnExit classNames={fadeNotification}>
					<Notification />
				</CSSTransition>

				<form className={styles.form} onSubmit={this.handleFormSubmit}>
					<label>
						Name
						<input
							autoFocus
							type="text"
							name="name"
							value={name}
							autoComplete="off"
							className={styles.input}
							onChange={this.handleChange}
						/>
					</label>

					<label>
						Email
						<input
							autoFocus
							type="text"
							name="email"
							value={email}
							autoComplete="off"
							className={styles.input}
							onChange={this.handleChange}
						/>
					</label>

					<label>
						Number
						<input
							type="text"
							name="phone"
							value={phone}
							autoComplete="off"
							placeholder="(xxx) xxx-xxxx"
							className={styles.input}
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
	onAddContact: contactsOperations.addContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
