//Core
import { Component, ChangeEvent, FormEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
//Redux
import { connect } from 'react-redux';
import contactsAction from 'redux/contacts/contactsAction';
//Components
import { Notification } from '../Commons';
//Helpers
import { TContact } from 'helpers/types';
//Styles
import styles from './ContactForm.module.css';
import fadeNotification from 'animation/fadeNotification.module.css';

interface IProps {
	contacts: TContact[];
	onAddContact: (name: string, number: string) => void;
}

interface IState {
	name: string;
	number: string;
}

export class ContactForm extends Component<IProps, IState> {
	state = {
		name: '',
		number: '',
	};

	private isNotice = false;

	setNotificationTimeout = (): void => {
		setTimeout(() => (this.isNotice = false), 2000);
	};

	handleChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement>): void =>
		this.setState({ [name]: value } as Pick<IState, keyof IState>);

	handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		const isContactExists = this.props.contacts.find(
			({ name }) => name.toLowerCase() === this.state.name.toLowerCase(),
		);

		if (isContactExists) {
			this.setState({ name: '', number: '' });
			this.isNotice = true;
			this.setNotificationTimeout();
			return;
		}

		this.props.onAddContact(this.state.name, this.state.number);
		this.setState({ name: '', number: '' });
	};

	render() {
		const { name, number } = this.state;

		return (
			<>
				<CSSTransition
					in={this.isNotice}
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
						Number
						<input
							type="text"
							name="number"
							value={number}
							autoComplete="off"
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

const mapStateToProps = ({ contacts }) => ({
	contacts: contacts.items,
});

const mapDispatchToProps = {
	onAddContact: contactsAction.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
