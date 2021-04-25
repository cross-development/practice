//Core
import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getContactId = (state, contactId) => contactId;

const getLoading = state => state.contacts.loading;

const getVisibleContacts = createSelector(
	[getContacts, getFilter],
	(contacts, filter) =>
		contacts.filter(({ name }) =>
			name.toLowerCase().includes(filter.toLowerCase()),
		),
);

const getContactById = createSelector(
	[getContacts, getContactId],
	(contacts, contactId) => contacts.find(({ id }) => id === contactId),
);

const contactSelectors = {
	getContacts,
	getFilter,
	getLoading,
	getVisibleContacts,
	getContactById,
};

export default contactSelectors;
