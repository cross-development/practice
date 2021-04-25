//Core
import axios from 'axios';
//Redux
import contactsActions from './contactsActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const addContact = credential => dispatch => {
	dispatch(contactsActions.addContactRequest());

	axios
		.post('/contacts', credential)
		.then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
		.catch(error => dispatch(contactsActions.addContactFailure(error)));
};

const removeContact = id => dispatch => {
	dispatch(contactsActions.removeContactRequest());

	axios
		.delete(`/contacts/${id}`)
		.then(() => dispatch(contactsActions.removeContactSuccess(id)))
		.catch(error => dispatch(contactsActions.removeContactFailure(error)));
};

const getContacts = () => dispatch => {
	dispatch(contactsActions.getContactsRequest());

	axios
		.get('/contacts')
		.then(({ data }) => dispatch(contactsActions.getContactsSuccess(data)))
		.catch(error => dispatch(contactsActions.getContactsFailure(error)));
};

const contactOperations = { addContact, removeContact, getContacts };

export default contactOperations;
