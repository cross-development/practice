//Core
import axios, { AxiosResponse } from 'axios';
//Redux
import { Dispatch } from 'redux';
import authActions from './authActions';
//Helpers
import { IStoreState, IAuth, TUser } from 'helpers/ts-helpers';

//Axios defaults config
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
	set(token: string) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},

	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

type TRegCred = { name: string; email: string; password: string };

const register = (credential: TRegCred) => (dispatch: Dispatch) => {
	dispatch(authActions.registerRequest());

	axios
		.post('/users/signup', credential)
		.then(({ data }: AxiosResponse<IAuth>) => {
			token.set(data.token);
			dispatch(authActions.registerSuccess(data));
		})
		.catch(error => dispatch(authActions.registerFailure(error)));
};

type TLogCred = { email: string; password: string };

const logIn = (credential: TLogCred) => (dispatch: Dispatch) => {
	dispatch(authActions.loginRequest());

	axios
		.post('/users/login', credential)
		.then(({ data }: AxiosResponse<IAuth>) => {
			token.set(data.token);
			dispatch(authActions.loginSuccess(data));
		})
		.catch(error => dispatch(authActions.loginFailure(error)));
};

const logOut = () => (dispatch: Dispatch) => {
	dispatch(authActions.logoutRequest());

	axios
		.post('/users/logout')
		.then(() => {
			token.unset();
			dispatch(authActions.logoutSuccess());
		})
		.catch(error => dispatch(authActions.logoutFailure(error)));
};

type TGetState = () => IStoreState;

const getCurrentUser = () => (dispatch: Dispatch, getState: TGetState) => {
	const state = getState();
	const { token: existToken } = state.auth;

	if (!existToken) return;

	token.set(existToken);
	dispatch(authActions.getCurrentUserRequest());

	axios
		.get('/users/current')
		.then(({ data }: AxiosResponse<TUser>) =>
			dispatch(authActions.getCurrentUserSuccess(data)),
		)
		.catch(error => dispatch(authActions.getCurrentUserFailure(error)));
};

const authOperations = { register, logIn, logOut, getCurrentUser };

export default authOperations;
