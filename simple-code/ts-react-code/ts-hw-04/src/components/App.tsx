//Core
import { Component } from 'react';
//Components
import Filter from './Filter';
import Section from './Section';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
//Helpers
import { TContact } from 'helpers/types';
//Utils
import crypto from 'crypto';

interface IState {
	contacts: TContact[];
	filter: string;
}

export class App extends Component<{}, IState> {
	state = {
		contacts: [],
		filter: '',
	};

	componentDidMount() {
		const existContact = localStorage.getItem('contacts');

		if (existContact) {
			this.setState({ contacts: JSON.parse(existContact) });
		}
	}

	componentDidUpdate(prevProps: {}, prevState: IState) {
		const { contacts } = this.state;

		if (prevState.contacts !== contacts) {
			localStorage.setItem('contacts', JSON.stringify(contacts));
		}
	}

	addContact = (name: string, number: string): void => {
		const { contacts } = this.state;

		const isContactExists = contacts.find(
			(contact: TContact) => contact.name.toLowerCase() === name.toLowerCase(),
		);

		if (isContactExists) {
			return alert(`${name} is already in contacts`);
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

	getVisibleContacts = (): TContact[] => {
		const { contacts, filter } = this.state;

		return contacts.filter(({ name }: TContact) =>
			name.toLowerCase().includes(filter.toLowerCase()),
		);
	};

	removeContactById = (contactId: string): void => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(({ id }) => id !== contactId),
			filter: '',
		}));
	};

	handleChangeFilter = (filter: string): void => this.setState({ filter });

	render() {
		const { contacts, filter } = this.state;
		const visibleContacts = this.getVisibleContacts();

		return (
			<>
				<Section title="Phonebook">
					<ContactForm onAddContact={this.addContact} />
				</Section>

				<Section title="Contacts">
					{contacts.length > 1 && (
						<Filter
							value={filter}
							title="Find contacts by name"
							onChangeFilter={this.handleChangeFilter}
						/>
					)}

					{contacts.length > 0 && (
						<ContactList
							contacts={visibleContacts}
							onRemoveContact={this.removeContactById}
						/>
					)}
				</Section>
			</>
		);
	}
}

export default App;
