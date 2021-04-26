//Core
import { Component } from 'react';
//Components
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import { Section, Main } from 'components/Commons';
//Redux
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
//Helpers
import { IStoreState, TContact } from 'helpers/ts-helpers';

interface IProps {
	contacts: TContact[];
	onGetContacts: () => void;
}

class ContactsPage extends Component<IProps, {}> {
	componentDidMount() {
		this.props.onGetContacts();
	}

	render() {
		const { contacts } = this.props;

		return (
			<Main>
				<Section>
					<ContactForm />
					{contacts.length > 1 && <Filter />}
				</Section>

				{contacts.length > 0 && (
					<Section>
						<ContactList />
					</Section>
				)}
			</Main>
		);
	}
}

const mapStateToProps = (state: IStoreState) => ({
	contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
	onGetContacts: contactsOperations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
