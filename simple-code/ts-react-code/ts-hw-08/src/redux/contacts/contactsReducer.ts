//Redux
import { combineReducers } from 'redux';
import { ADD, FILTER, REMOVE, TContactActions } from './contactsActionTypes';

const items = (state = [], { type, payload }: TContactActions) => {
	switch (type) {
		case ADD:
			return [...state, payload.contact];

		case REMOVE:
			return state.filter(({ id }) => id !== payload.contactId);

		default:
			return state;
	}
};

const filter = (state = '', { type, payload }: TContactActions) => {
	switch (type) {
		case FILTER:
			return payload.filter;

		default:
			return state;
	}
};

export default combineReducers({ items, filter });
