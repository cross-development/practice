import { createStore, combineReducers } from 'redux';
import tasksReducer from './tasks/tasksReducer';

const rootReducer = combineReducers({
	tasks: tasksReducer,
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
