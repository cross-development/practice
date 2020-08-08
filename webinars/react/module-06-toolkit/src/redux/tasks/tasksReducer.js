import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import taskActions from './tasksActions';
import handleReducer from './tasksHandleReducer';

const items = createReducer([], {
	[taskActions.addTask]: handleReducer.onAddTask,
	[taskActions.removeTask]: handleReducer.onRemoveTask,
	[taskActions.toggleCompleted]: handleReducer.onToggleCompleted,
});

const filter = createReducer('', {
	[taskActions.changeFilter]: handleReducer.onChangeFilter,
});

export default combineReducers({
	items,
	filter,
});
