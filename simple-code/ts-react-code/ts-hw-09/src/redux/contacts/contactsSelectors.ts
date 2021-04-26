//Core
import { createSelector } from '@reduxjs/toolkit';
//Helpers
import { IStoreState } from 'helpers/ts-helpers';

const getContacts = (state: IStoreState) => state.contacts.items;

const getFilter = (state: IStoreState) => state.contacts.filter;

const getContactId = (state: IStoreState, contactId: string) => contactId;

const getLoading = (state: IStoreState) => state.contacts.loading;

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
