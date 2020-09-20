import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Button } from 'react-native';

const DefaultScreen = ({ route, navigation }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (route.params) {
			setPosts(prevState => [...prevState, route.params]);
		}
	}, [route.params]);

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				keyExtractor={(item, idx) => idx.toString()}
				renderItem={item => (
					<View style={styles.imageContainer}>
						<Image source={{ uri: item.photo }} style={styles.postImage} />
					</View>
				)}
			/>
			<Button title="go to map" onPress={() => navigation.navigate('MapScreen')} />
			<Button title="go to comments" onPress={() => navigation.navigate('CommentsScreen')} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: 20,
		// alignItems: 'center',
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
