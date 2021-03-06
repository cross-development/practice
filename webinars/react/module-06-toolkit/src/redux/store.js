import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasks/tasksReducer';

//reducer - static property, has rootReducer
const store = configureStore({
	reducer: {
		tasks: tasksReducer,
	},
});

export default store;
