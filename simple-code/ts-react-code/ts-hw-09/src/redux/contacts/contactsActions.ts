//Core
import { createAction } from '@reduxjs/toolkit';

const getContactsRequest = createAction('contacts/getContactsRequest');
const getContactsSuccess = createAction('contacts/getContactsSuccess');
const getContactsFailure = createAction('contacts/getContactsFailure');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactFailure = createAction('contacts/addContactFailure');

const removeContactRequest = createAction('contacts/removeContactRequest');
const removeContactSuccess = createAction('contacts/removeContactSuccess');
const removeContactFailure = createAction('contacts/removeContactFailure');

const changeFilter = createAction('contacts/changeFilter');

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
