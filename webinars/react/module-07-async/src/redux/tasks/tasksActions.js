import { createAction } from '@reduxjs/toolkit';

const fetchTasksRequest = createAction('tasks/fetchRequest');
const fetchTasksSuccess = createAction('tasks/fetchSuccess');
const fetchTasksError = createAction('tasks/fetchError');

const addTaskRequest = createAction('tasks/addRequest');
const addTaskSuccess = createAction('tasks/addSuccess');
const addTaskError = createAction('tasks/addError');

const removeTaskRequest = createAction('tasks/removeRequest');
const removeTaskSuccess = createAction('tasks/removeSuccess');
const removeTaskError = createAction('tasks/removeError');

const toggleCompletedRequest = createAction('tasks/toggleCompletedRequest');
const toggleCompletedSuccess = createAction('tasks/toggleCompletedSuccess');
const toggleCompletedError = createAction('tasks/toggleCompletedError');

const changeFilter = createAction('tasks/changeFilter');

export default {
	fetchTasksRequest,
	fetchTasksSuccess,
	fetchTasksError,

	addTaskRequest,
	addTaskSuccess,
	addTaskError,

	removeTaskRequest,
	removeTaskSuccess,
	removeTaskError,

	toggleCompletedRequest,
	toggleCompletedSuccess,
	toggleCompletedError,

	changeFilter,
};

// const reduxThunk = store => next => action => {
// 	if (typeof action === 'function') {
// 		action(store.dispatch, store.getState);
// 	}

// 	next(action);
// };
