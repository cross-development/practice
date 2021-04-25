const isAuthenticated = state => state.auth.token;

const getUserEmail = state => state.auth.user.email;

const hasError = state => state.auth.error;

const authSelectors = {
	isAuthenticated,
	getUserEmail,
	hasError,
};

export default authSelectors;
