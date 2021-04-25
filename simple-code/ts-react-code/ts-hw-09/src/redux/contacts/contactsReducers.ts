//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import contactsActions from './contactsActions';

//Items initial state
const initialItemsState = [];

//Items reducer handler
const getContacts = (state, { payload }) => payload;
const addContact = (state, { payload }) => [...state, payload];
const removeContact = (state, { payload }) => state.filter(({ id }) => id !== payload);

//Items reducer
const items = createReducer(initialItemsState, {
	[contactsActions.getContactsSuccess]: getContacts,
	[contactsActions.addContactSuccess]: addContact,
	[contactsActions.removeContactSuccess]: removeContact,
});

//Filter initial state
const initialFilterState = '';

//Filter reducer handler
const changeFilter = (state, { payload }) => payload;

//Filter reducer
const filter = createReducer(initialFilterState, {
	[contactsActions.changeFilter]: changeFilter,
});

//Loading initial state
const initialLoadingState = false;

//Loading reducer
const loading = createReducer(initialLoadingState, {
	[contactsActions.getContactsRequest]: () => true,
	[contactsActions.getContactsSuccess]: () => initialLoadingState,
	[contactsActions.getContactsFailure]: () => initialLoadingState,

	[contactsActions.addContactRequest]: () => true,
	[contactsActions.addContactSuccess]: () => initialLoadingState,
	[contactsActions.addContactFailure]: () => initialLoadingState,

	[contactsActions.removeContactRequest]: () => true,
	[contactsActions.removeContactSuccess]: () => initialLoadingState,
	[contactsActions.removeContactFailure]: () => initialLoadingState,
});

export default combineReducers({
	items,
	filter,
	loading,
});
