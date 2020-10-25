//Core
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
//Redux
import { useSelector } from 'react-redux';
//Database
import db from '../../firebase/config';

const CommentsScreen = ({ route }) => {
	const [comment, setComment] = useState('');
	const [allComments, setAllComments] = useState([]);

	const { postId } = route.params;
	const { nickname } = useSelector(state => state.auth);

	useEffect(() => getAllPosts(), []);

	const createPost = async () => {
		db.firestore()
			.collection('posts')
			.doc(postId)
			.collection('comments')
			.add({ comment, nickname });

		setComment('');
	};

	const getAllPosts = async () => {
		db.firestore()
			.collection('posts')
			.doc(postId)
			.collection('comments')
			.onSnapshot(data =>
				setAllComments(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))),
			);
	};

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.container}>
				<FlatList
					data={allComments}
					renderItem={({ item }) => (
						<View style={styles.commentContainer}>
							<Text>{item.nickname}</Text>
							<Text>{item.comment}</Text>
						</View>
					)}
					keyExtractor={item => item.id}
				/>
			</SafeAreaView>

			<View style={styles.inputContainer}>
				<TextInput style={styles.input} onChangeText={setComment} />
			</View>

			<TouchableOpacity activeOpacity={0.6} style={styles.sendBtn} onPress={createPost}>
				<Text style={styles.sendLabel}>Add post</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'flex-end',
	},

	commentContainer: {
		borderWidth: 1,
		borderColor: '#20b2aa',
		marginHorizontal: 10,
		padding: 10,
		marginBottom: 10,
	},

	sendBtn: {
		marginHorizontal: 30,
		height: 40,
		borderWidth: 2,
		borderColor: '#20b2aa',
		borderRadius: 10,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},

	inputContainer: {
		marginHorizontal: 10,
		marginBottom: 20,
	},

	input: {
		height: 50,
		borderWidth: 1,
		borderColor: 'transparent',
		borderBottomColor: '#20b2aa',
	},

	sendLabel: {
		color: '#20b2aa',
		fontSize: 20,
	},
});

export default CommentsScreen;
