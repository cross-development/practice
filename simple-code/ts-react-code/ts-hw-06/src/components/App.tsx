//Core
import { Component, ChangeEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
//Components
import Filter from './Filter';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { Heading, Notification, Section, ThemeSwitcher } from './Commons';
//Helpers
import { TContact } from 'helpers/types';
//Utils
import crypto from 'crypto';
//Styles
import fadeFilter from 'animation/fadeFilter.module.css';
import fadeHeading from 'animation/fadeHeading.module.css';
import fadeNotification from 'animation/fadeNotification.module.css';

interface IState {
	filter: string;
	contacts: TContact[];
	isNotice: boolean;
}

export class App extends Component<{}, IState> {
	state: IState = {
		filter: '',
		contacts: [],
		isNotice: false,
	};

	componentDidMount() {
		const existContact = localStorage.getItem('contacts');

		if (existContact) {
			this.setState({ contacts: JSON.parse(existContact) });
		}
	}

	componentDidUpdate(prevProps: {}, prevState: IState) {
		if (prevState.contacts !== this.state.contacts) {
			localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
		}
	}

	addContact = (name: string, number: string): void => {
		const isContactExists = this.state.contacts.find(
			contact => contact.name.toLowerCase() === name.toLowerCase(),
		);

		if (isContactExists) {
			this.setState({ isNotice: true });
			this.setNotificationTimeout(2000);
			return;
		}

		const contact = {
			id: crypto.randomBytes(16).toString('hex'),
			name,
			number,
		};

		this.setState(prevState => ({
			contacts: [...prevState.contacts, contact],
		}));
	};

	setNotificationTimeout = (delay: number): void => {
		setTimeout(() => this.setState({ isNotice: false }), delay);
	};

	getVisibleContacts = (): TContact[] => {
		const { contacts, filter } = this.state;

		return contacts.filter(({ name }) =>
			name.toLowerCase().includes(filter.toLowerCase()),
		);
	};

	removeContactById = (contactId: string): void => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(({ id }) => id !== contactId),
			filter: '',
		}));
	};

	handleChangeFilter = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>): void => this.setState({ filter: value });

	render() {
		const { contacts, filter, isNotice } = this.state;

		const visibleContacts = this.getVisibleContacts();

		return (
			<Section>
				<ThemeSwitcher />

				<CSSTransition
					in={true}
					classNames={fadeHeading}
					timeout={500}
					appear
					unmountOnExit
				>
					<Heading />
				</CSSTransition>

				<CSSTransition
					in={isNotice}
					classNames={fadeNotification}
					timeout={250}
					unmountOnExit
				>
					<Notification />
				</CSSTransition>

				<ContactForm onAddContact={this.addContact} />

				<CSSTransition
					in={contacts.length > 1}
					classNames={fadeFilter}
					timeout={250}
					unmountOnExit
				>
					<Filter value={filter} onChangeFilter={this.handleChangeFilter} />
				</CSSTransition>

				{contacts.length > 0 && (
					<ContactList
						contacts={visibleContacts}
						onRemoveContact={this.removeContactById}
					/>
				)}
			</Section>
		);
	}
}

export default App;
