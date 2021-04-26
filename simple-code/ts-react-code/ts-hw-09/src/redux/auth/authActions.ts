//Core
import { createAction } from '@reduxjs/toolkit';
import { IAuth, TUser } from 'helpers/ts-helpers';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction<IAuth>('auth/registerSuccess');
const registerFailure = createAction<Error>('auth/registerFailure');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction<IAuth>('auth/loginSuccess');
const loginFailure = createAction<Error>('auth/loginFailure');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutFailure = createAction<Error>('auth/logoutFailure');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction<TUser>('auth/getCurrentUserSuccess');
const getCurrentUserFailure = createAction<Error>('auth/getCurrentUserFailure');

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
