//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Filter from 'components/Filter';
import { Section, Main } from 'components/Commons';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
//Redux
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

class ContactsView extends Component {
	static propTypes = {
		onGetContacts: PropTypes.func.isRequired,
		contacts: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				number: PropTypes.string.isRequired,
			}).isRequired,
		).isRequired,
	};

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

const mapStateToProps = state => ({
	contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
	onGetContacts: contactsOperations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
