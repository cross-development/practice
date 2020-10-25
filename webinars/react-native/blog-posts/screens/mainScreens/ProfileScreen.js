//Core
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Button, FlatList } from 'react-native';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { authSignOutUser } from '../../redux/auh/authOperations';
//Database
import db from '../../firebase/config';

const ProfileScreen = () => {
	const [userPosts, setUserPosts] = useState([]);

	useEffect(() => getUserPosts(), []);

	const dispatch = useDispatch();
	const { userId } = useSelector(state => state.auth);

	const signOut = () => dispatch(authSignOutUser());

	const getUserPosts = async () => {
		await db
			.firestore()
			.collection('posts')
			.where('userId', '==', userId)
			.onSnapshot(data => setUserPosts(data.docs.map(doc => ({ ...doc.data() }))));
	};

	return (
		<View style={styles.container}>
			<Button style={styles.btn} title="signOut" onPress={signOut} />

			<View>
				<FlatList
					data={userPosts}
					keyExtractor={(item, idx) => idx.toString()}
					renderItem={item => (
						<View style={styles.imageContainer}>
							<Image source={{ uri: item.photo }} style={styles.postImage} />
						</View>
					)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},

	btn: {
		marginTop: 50,
	},
});

export default ProfileScreen;
