import { PUT_DATA } from './actions';

const initialState = {
	data: {},
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case PUT_DATA:
			return { ...state, data: payload };

		default:
			return state;
	}
};
