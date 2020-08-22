const fetchTasks = (state, action) => action.payload;

const onAddTask = (state, action) => [...state, action.payload];

const onRemoveTask = (state, action) => state.filter(task => task.id !== action.payload);

const onToggleCompleted = (state, action) =>
	state.map(task => (task.id === action.payload.id ? action.payload : task));

const onChangeFilter = (state, { payload }) => payload;

export default {
	fetchTasks,
	onAddTask,
	onRemoveTask,
	onToggleCompleted,
	onChangeFilter,
};
