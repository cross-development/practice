//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from './authActions';

//User initial State
const initialUserState = { name: null, email: null };

//User reducer
const user = createReducer(initialUserState, {
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
	[authActions.registerSuccess]: (state, { payload }) => payload.user,
	[authActions.loginSuccess]: (state, { payload }) => payload.user,
	[authActions.logoutSuccess]: () => initialUserState,
});

//Token reducer
const token = createReducer(null, {
	[authActions.registerSuccess]: (state, { payload }) => payload.token,
	[authActions.loginSuccess]: (state, { payload }) => payload.token,
	[authActions.logoutSuccess]: () => null,
});

//Error reducer
const error = createReducer(null, {
	[authActions.getCurrentUserFailure]: (state, { payload }) => payload,
	[authActions.registerFailure]: (state, { payload }) => payload,
	[authActions.logoutFailure]: (state, { payload }) => payload,
	[authActions.loginFailure]: (state, { payload }) => payload,
});

export default combineReducers({
	user,
	token,
	error,
});
