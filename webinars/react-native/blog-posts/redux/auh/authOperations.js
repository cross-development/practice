//Redux
import { authSlice } from './authReducer';
//Database
import db from '../../firebase/config';

export const authSignUpUser = ({ email, password, nickname }) => async dispatch => {
	try {
		await db.auth().createUserWithEmailAndPassword(email, password);

		const user = await db.auth().currentUser;
		await user.updateProfile({ displayName: nickname });

		const { uid, displayName } = await db.auth().currentUser;

		dispatch(
			authSlice.actions.updateUserProfile({
				userId: uid,
				nickname: displayName,
			}),
		);
	} catch (error) {
		console.log('error', error);
		console.log('error.message', error.message);
	}
};

export const authSignInUser = ({ email, password }) => async dispatch => {
	try {
		await db.auth().signInWithEmailAndPassword(email, password);
	} catch (error) {
		console.log('error', error);
		console.log('error.message', error.message);
	}
};

export const authSignOutUser = () => async dispatch => {
	await db.auth().signOut();

	dispatch(authSlice.actions.authSignOut());
};

export const authSateChangeUser = () => async dispatch => {
	await db.auth().onAuthStateChanged(user => {
		if (user) {
			dispatch(
				authSlice.actions.updateUserProfile({
					userId: user.uid,
					nickname: user.displayName,
				}),
			);

			dispatch(authSlice.actions.authStateChange({ stateChange: true }));
		}
	});
};
