//Redux
import { createStore, combineReducers } from 'redux';
import contactsReducer from './contacts/contactsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
	contacts: contactsReducer,
});

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;
