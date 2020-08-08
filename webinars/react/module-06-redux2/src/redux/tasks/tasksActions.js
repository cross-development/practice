import { uuid } from 'uuidv4';
import actionTypes from './tasksActionTypes';

const addTask = text => ({
	type: actionTypes.ADD,
	payload: {
		task: {
			id: uuid(),
			text,
			completed: false,
		},
	},
});

const removeTask = taskId => ({
	type: actionTypes.REMOVE,
	payload: {
		taskId,
	},
});

const toggleCompleted = taskId => ({
	type: actionTypes.TOGGLE_COMPLETED,
	payload: {
		taskId,
	},
});

const changeFilter = filter => ({
	type: actionTypes.CHANGE_FILTER,
	payload: {
		filter,
	},
});

export default {
	addTask,
	removeTask,
	toggleCompleted,
	changeFilter,
};
