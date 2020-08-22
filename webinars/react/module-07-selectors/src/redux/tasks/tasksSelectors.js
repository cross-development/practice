import { createSelector } from '@reduxjs/toolkit';

const getTasks = state => state.tasks.items;

const getLoading = state => state.tasks.loading;

const getFilter = state => state.tasks.filter;

const getVisibleTasks = createSelector(
	[getTasks, getFilter],
	(tasks, filter) => {
		return tasks.filter(task =>
			task.text.toLowerCase().includes(filter.toLowerCase()),
		);
	},
);

const getTaskById = createSelector(
	[(state, taskId) => taskId, getTasks],
	(taskId, tasks) => tasks.find(task => task.id === taskId),
);

export default {
	getLoading,
	getFilter,
	getTaskById,
	getVisibleTasks,
};

// const getVisibleTasks = state => {
// 	const tasks = getTasks(state);
// 	const filter = getFilter(state).toLowerCase();

// 	return tasks.filter(({ text }) => text.toLowerCase().includes(filter));
// };

// const getTaskById = (state, taskId) => {
// 	const tasks = getTasks(state);

// 	return tasks.find(task => task.id === taskId);
// };
