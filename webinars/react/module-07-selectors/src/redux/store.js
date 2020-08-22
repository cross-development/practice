import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasks/tasksReducer';
import counterReducer from './counter/counterReducer';

//reducer - static property, has rootReducer
const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		counter: counterReducer,
	},
	// middleware: [...defaultMiddleware],
});

export default store;
