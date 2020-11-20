//Core
import axios from 'axios';
//Redux
import contactsActions from './contactsActions';

axios.defaults.baseURL = 'http://localhost:2000/api';

const fetchContacts = () => dispatch => {
	dispatch(contactsActions.fetchContactsRequest());

	axios
		.get('/contacts')
		.then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
		.catch(error => dispatch(contactsActions.fetchContactsFailure(error)));
};

const addContacts = (name, email, phone) => dispatch => {
	dispatch(contactsActions.addContactRequest());

	axios
		.post('/contacts', { name, email, phone })
		.then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
		.catch(error => dispatch(contactsActions.addContactFailure(error)));
};

const removeContact = contactId => dispatch => {
	dispatch(contactsActions.removeContactRequest());

	axios
		.delete(`/contacts/${contactId}`)
		.then(() => dispatch(contactsActions.removeContactSuccess(contactId)))
		.catch(error => dispatch(contactsActions.removeContactFailure(error)));
};

const updateContact = contactId => dispatch => {};

const getContactById = contactId => dispatch => {};

const contactsOperations = {
	fetchContacts,
	addContacts,
	removeContact,
	updateContact,
	getContactById,
};

export default contactsOperations;
