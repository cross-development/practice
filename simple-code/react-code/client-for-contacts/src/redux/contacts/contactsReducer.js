//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import contactsActions from './contactsActions';

const fetchContacts = (state, { payload }) => payload;
const onAddContact = (state, { payload }) => [...state, payload];
const onRemoveContact = (state, { payload }) => state.filter(({ id }) => id !== payload);

const items = createReducer([], {
	[contactsActions.fetchContactsSuccess]: fetchContacts,
	[contactsActions.addContactSuccess]: onAddContact,
	[contactsActions.removeContactSuccess]: onRemoveContact,
});

const onChangeFilter = (state, { payload }) => payload;

const filter = createReducer('', {
	[contactsActions.changeFilter]: onChangeFilter,
});

export default combineReducers({
	items,
	filter,
});
