//Helpers
import { IStoreState } from 'helpers/ts-helpers';

const isAuthenticated = (state: IStoreState) => state.auth.token;

const getUserEmail = (state: IStoreState) => state.auth.user.email;

const hasError = (state: IStoreState) => state.auth.error;

const authSelectors = {
	isAuthenticated,
	getUserEmail,
	hasError,
};

export default authSelectors;
