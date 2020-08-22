import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import taskActions from './tasksActions';
import handleReducer from './tasksHandleReducer';

const items = createReducer([], {
	[taskActions.fetchTasksSuccess]: handleReducer.fetchTasks,
	[taskActions.addTaskSuccess]: handleReducer.onAddTask,
	[taskActions.removeTaskSuccess]: handleReducer.onRemoveTask,
	[taskActions.toggleCompletedSuccess]: handleReducer.onToggleCompleted,
});

const filter = createReducer('', {
	[taskActions.changeFilter]: handleReducer.onChangeFilter,
});

const loading = createReducer(false, {
	[taskActions.fetchTasksRequest]: () => true,
	[taskActions.fetchTasksSuccess]: () => false,
	[taskActions.fetchTasksError]: () => false,

	[taskActions.addTaskRequest]: () => true,
	[taskActions.addTaskSuccess]: () => false,
	[taskActions.addTaskError]: () => false,

	[taskActions.removeTaskRequest]: () => true,
	[taskActions.removeTaskSuccess]: () => false,
	[taskActions.removeTaskError]: () => false,

	[taskActions.toggleCompletedRequest]: () => true,
	[taskActions.toggleCompletedSuccess]: () => false,
	[taskActions.toggleCompletedError]: () => false,
});

// const error = createReducer(null, {
// 	[taskActions.fetchTasksError]: () => true,
// 	[taskActions.addTaskError]: () => true,
// 	[taskActions.removeTaskError]: () => true,
// 	[taskActions.toggleCompletedError]: () => true,
// });

export default combineReducers({
	items,
	filter,
	loading,
	// error,
});
