//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from './authActions';

//User initial State
const initialUserState = { name: null, email: null };

//User reducer
const user = createReducer(initialUserState, {
	[authActions.getCurrentUserSuccess.type]: (state, { payload }) => payload,
	[authActions.registerSuccess.type]: (state, { payload }) => payload.user,
	[authActions.loginSuccess.type]: (state, { payload }) => payload.user,
	[authActions.logoutSuccess.type]: () => initialUserState,
});

//Token reducer
const token = createReducer('', {
	[authActions.registerSuccess.type]: (state, { payload }) => payload.token,
	[authActions.loginSuccess.type]: (state, { payload }) => payload.token,
	[authActions.logoutSuccess.type]: () => '',
});

//Error reducer
const error = createReducer(null, {
	[authActions.getCurrentUserFailure.type]: (state, { payload }) => payload,
	[authActions.registerFailure.type]: (state, { payload }) => payload,
	[authActions.logoutFailure.type]: (state, { payload }) => payload,
	[authActions.loginFailure.type]: (state, { payload }) => payload,
});

export default combineReducers({
	user,
	token,
	error,
});
