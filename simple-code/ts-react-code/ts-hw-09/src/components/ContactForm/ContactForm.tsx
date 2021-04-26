//Core
import { Component, ChangeEvent, FormEvent } from 'react';
//Components
import { Notification } from 'components/Commons';
//Redux
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
//Helpers
import { IStoreState, TContact } from 'helpers/ts-helpers';
//Styles
import styles from './ContactForm.module.css';
import { CSSTransition } from 'react-transition-group';
import fadeNotification from 'animation/fadeNotification.module.css';

type TAddContact = { name: string; number: string };
interface IProps {
	contacts: TContact[];
	onAddContact: ({ name, number }: TAddContact) => void;
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

	setNotificationTimeout = (delay: number) =>
		setTimeout(() => (this.isNotice = false), delay);

	handleChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement>): void =>
		this.setState({ [name]: value } as Pick<IState, keyof IState>);

	handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		const { name, number } = this.state;
		const { contacts, onAddContact } = this.props;

		const isContactExists = contacts.find(
			contact => contact.name.toLowerCase() === name.toLowerCase(),
		);

		if (isContactExists) {
			this.setState({ name: '', number: '' });
			this.setNotificationTimeout(1000);
			return;
		}

		onAddContact({ name, number });
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

const mapStateToProps = (state: IStoreState) => ({
	contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
	onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
