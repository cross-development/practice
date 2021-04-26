//Core
import axios, { AxiosResponse } from 'axios';
//Redux
import { Dispatch } from 'redux';
import contactsActions from './contactsActions';
//Helpers
import { TContact } from 'helpers/ts-helpers';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

type TCredential = { name: string; number: string };

const addContact = (credential: TCredential) => (dispatch: Dispatch) => {
	dispatch(contactsActions.addContactRequest());

	axios
		.post('/contacts', credential)
		.then(({ data }: AxiosResponse<TContact>) =>
			dispatch(contactsActions.addContactSuccess(data)),
		)
		.catch(error => dispatch(contactsActions.addContactFailure(error)));
};

const removeContact = (id: string) => (dispatch: Dispatch) => {
	dispatch(contactsActions.removeContactRequest());

	axios
		.delete(`/contacts/${id}`)
		.then(() => dispatch(contactsActions.removeContactSuccess(id)))
		.catch(error => dispatch(contactsActions.removeContactFailure(error)));
};

const getContacts = () => (dispatch: Dispatch) => {
	dispatch(contactsActions.getContactsRequest());

	axios
		.get('/contacts')
		.then(({ data }: AxiosResponse<TContact[]>) =>
			dispatch(contactsActions.getContactsSuccess(data)),
		)
		.catch(error => dispatch(contactsActions.getContactsFailure(error)));
};

const contactOperations = { addContact, removeContact, getContacts };

export default contactOperations;
