import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
//Redux
import { useDispatch } from 'react-redux';
import { authSignOutUser } from '../../redux/auh/authOperations';

const ProfileScreen = () => {
	const dispatch = useDispatch();

	const signOut = () => dispatch(authSignOutUser());

	return (
		<View style={styles.container}>
			<Text>ProfileScreen</Text>
			<Button title="signOut" onPress={signOut} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default ProfileScreen;
