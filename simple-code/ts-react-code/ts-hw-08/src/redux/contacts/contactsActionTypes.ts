//Helpers
import { TContact } from 'helpers/types';

export const ADD = 'contacts/add';
export const REMOVE = 'contacts/remove';
export const FILTER = 'contacts/changeFilter';

interface IAddContact {
	type: typeof ADD;
	payload: { contact: TContact };
}

interface IRemoveContact {
	type: typeof REMOVE;
	payload: { contactId: string };
}

interface IFilterContact {
	type: typeof FILTER;
	payload: { filter: string };
}

export type TContactActions = IAddContact | IRemoveContact | IFilterContact;
