//Core
import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerFailure = createAction('auth/registerFailure');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginFailure = createAction('auth/loginFailure');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutFailure = createAction('auth/logoutFailure');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserFailure = createAction('auth/getCurrentUserFailure');

const authActions = {
	registerRequest,
	registerSuccess,
	registerFailure,

	loginRequest,
	loginSuccess,
	loginFailure,

	logoutRequest,
	logoutSuccess,
	logoutFailure,

	getCurrentUserRequest,
	getCurrentUserSuccess,
	getCurrentUserFailure,
};

export default authActions;
