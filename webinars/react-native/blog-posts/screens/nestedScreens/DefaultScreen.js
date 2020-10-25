//Core
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Button, Text } from 'react-native';
//Database
import db from '../../firebase/config';

const DefaultScreen = ({ navigation }) => {
	const [posts, setPosts] = useState([]);

	const getAllPosts = async () => {
		await db
			.firestore()
			.collection('posts')
			.onSnapshot(data => setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))));
	};

	useEffect(() => getAllPosts(), []);

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				keyExtractor={(item, idx) => idx.toString()}
				renderItem={item => (
					<View style={styles.imageContainer}>
						<Image source={{ uri: item.photo }} style={styles.postImage} />
						<View>
							<Text>{item.comment}</Text>
						</View>
						<View>
							<Button
								title="go to map"
								onPress={() =>
									navigation.navigate('MapScreen', { location: item.location })
								}
							/>
							<Button
								title="go to comments"
								onPress={() =>
									navigation.navigate('CommentsScreen', { postId: item.id })
								}
							/>
						</View>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: 20,
	},

	imageContainer: {
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},

	postImage: {
		width: 350,
		height: 200,
	},
});

export default DefaultScreen;
