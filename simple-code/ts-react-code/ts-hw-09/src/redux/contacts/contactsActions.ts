//Core
import { createAction } from '@reduxjs/toolkit';
import { TContact } from 'helpers/ts-helpers';

const getContactsRequest = createAction('contacts/getContactsRequest');
const getContactsSuccess = createAction<TContact[]>(
	'contacts/getContactsSuccess',
);
const getContactsFailure = createAction<Error>('contacts/getContactsFailure');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction<TContact>('contacts/addContactSuccess');
const addContactFailure = createAction<Error>('contacts/addContactFailure');

const removeContactRequest = createAction('contacts/removeContactRequest');
const removeContactSuccess = createAction<string>(
	'contacts/removeContactSuccess',
);
const removeContactFailure = createAction<Error>(
	'contacts/removeContactFailure',
);

const changeFilter = createAction<string>('contacts/changeFilter');

const contactActions = {
	getContactsRequest,
	getContactsSuccess,
	getContactsFailure,

	addContactRequest,
	addContactSuccess,
	addContactFailure,

	removeContactRequest,
	removeContactSuccess,
	removeContactFailure,

	changeFilter,
};

export default contactActions;
