import { combineReducers } from 'redux';
import actionTypes from './tasksActionTypes';

const items = (state = [], { type, payload }) => {
	switch (type) {
		case actionTypes.ADD:
			return [...state, payload.task];

		case actionTypes.REMOVE:
			return state.filter(task => task.id !== payload.taskId);

		case actionTypes.TOGGLE_COMPLETED:
			return state.map(task =>
				task.id === payload.taskId ? { ...task, completed: !task.completed } : task,
			);

		default:
			return state;
	}
};

const filter = (state = '', { type, payload }) => {
	switch (type) {
		case actionTypes.CHANGE_FILTER:
			return payload.filter;

		default:
			return state;
	}
};

export default combineReducers({
	items,
	filter,
});
