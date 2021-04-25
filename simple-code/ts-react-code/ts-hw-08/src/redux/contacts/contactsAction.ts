//Redux
import { ADD, REMOVE, FILTER, TContactActions } from './contactsActionTypes';
//Utils
import crypto from 'crypto';

const addContact = (name: string, number: string): TContactActions => ({
	type: ADD,
	payload: {
		contact: {
			id: crypto.randomBytes(16).toString('hex'),
			name,
			number,
		},
	},
});

const removeContact = (contactId: string): TContactActions => ({
	type: REMOVE,
	payload: { contactId },
});

const changeFilter = (filter: string): TContactActions => ({
	type: FILTER,
	payload: { filter },
});

const contactActions = { addContact, removeContact, changeFilter };

export default contactActions;
