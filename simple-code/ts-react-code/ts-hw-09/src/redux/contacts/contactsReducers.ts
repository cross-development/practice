//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import contactsActions from './contactsActions';

const items = createReducer([], {
	[contactsActions.getContactsSuccess.type]: (state, { payload }) => payload,
	[contactsActions.addContactSuccess.type]: (state, { payload }) => [
		...state,
		payload,
	],
	[contactsActions.removeContactSuccess.type]: (state, { payload }) =>
		state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
	[contactsActions.changeFilter.type]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
	[contactsActions.getContactsRequest.type]: () => true,
	[contactsActions.getContactsSuccess.type]: () => false,
	[contactsActions.getContactsFailure.type]: () => false,

	[contactsActions.addContactRequest.type]: () => true,
	[contactsActions.addContactSuccess.type]: () => false,
	[contactsActions.addContactFailure.type]: () => false,

	[contactsActions.removeContactRequest.type]: () => true,
	[contactsActions.removeContactSuccess.type]: () => false,
	[contactsActions.removeContactFailure.type]: () => false,
});

export default combineReducers({
	items,
	filter,
	loading,
});
