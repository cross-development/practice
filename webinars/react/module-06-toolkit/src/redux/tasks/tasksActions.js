import { uuid } from 'uuidv4';
import { createAction } from '@reduxjs/toolkit';

const addTask = createAction('tasks/add', text => ({
	payload: {
		task: {
			id: uuid(),
			text,
			completed: false,
		},
	},
}));

const removeTask = createAction('tasks/remove');
const toggleCompleted = createAction('tasks/toggleCompleted');
const changeFilter = createAction('tasks/changeFilter');

export default {
	addTask,
	removeTask,
	toggleCompleted,
	changeFilter,
};
