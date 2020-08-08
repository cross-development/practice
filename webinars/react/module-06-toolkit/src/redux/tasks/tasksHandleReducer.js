const onAddTask = (state, { payload }) => [...state, payload.task];

const onRemoveTask = (state, { payload }) => state.filter(task => task.id !== payload);

const onToggleCompleted = (state, { payload }) =>
	state.map(task => (task.id === payload ? { ...task, completed: !task.completed } : task));

const onChangeFilter = (state, { payload }) => payload;

export default {
	onAddTask,
	onRemoveTask,
	onToggleCompleted,
	onChangeFilter,
};
