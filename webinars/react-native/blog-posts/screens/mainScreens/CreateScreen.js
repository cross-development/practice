//Core
import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
//Redux
import { useSelector } from 'react-redux';
//Database
import db from '../../firebase/config';

const CreateScreen = ({ navigation }) => {
	const [photo, setPhoto] = useState(null);
	const [camera, setCamera] = useState(null);
	const [comment, setComment] = useState('');
	const [location, setLocation] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);

	const { userId, nickname } = useSelector(state => state.auth);

	useEffect(() => {
		(async () => {
			let { status } = await Camera.requestPermissionsAsync();
			await MediaLibrary.requestPermissionsAsync();

			if (status !== 'granted') {
				console.log('Permission to access location was denied');
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const { status } = await Location.requestPermissionsAsync();

			if (status !== 'granted') {
				console.log('Permission to access location was denied');
			}

			let locationRes = await Location.getCurrentPositionAsync({});
			setLocation(locationRes);
		})();
	}, []);

	const takePhoto = async () => {
		const { uri } = await camera.takePictureAsync();
		await MediaLibrary.createAssetAsync(uri);

		setPhoto(uri);
	};

	const sendPhoto = () => {
		uploadPostToServer();
		navigation.navigate('DefaultScreen');
	};

	const uploadPostToServer = async () => {
		const photo = await uploadPhotoToServer();

		const createPost = await db
			.firestore()
			.collection('posts')
			.add({ photo, comment, location: location.coords, userId, nickname });
	};

	const uploadPhotoToServer = async () => {
		const response = await fetch(photo);
		const file = await response.blob();

		const uniquePostId = Date.now().toString();

		await db.storage().ref(`postImage/${uniquePostId}`).put(file);

		const processedPhoto = await db
			.storage()
			.ref('postImage')
			.child(uniquePostId)
			.getDownloadURL();

		return processedPhoto;
	};

	return (
		<View style={styles.container}>
			<Camera style={styles.camera} ref={setCamera} type={type}>
				{photo && (
					<View style={styles.takePhotoContainer}>
						<Image source={{ uri: photo }} style={{ height: 200, width: 200 }} />
					</View>
				)}

				<TouchableOpacity
					activeOpacity={0.6}
					style={styles.snapContainer}
					onPress={takePhoto}
				>
					<Text style={styles.snap}>SNAP</Text>
				</TouchableOpacity>
			</Camera>

			<View style={styles.inputContainer}>
				<TextInput style={styles.input} onChangeText={setComment} />
			</View>

			<TouchableOpacity activeOpacity={0.6} style={styles.sendBtn} onPress={sendPhoto}>
				<Text style={styles.sendLabel}>SEND</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	camera: {
		height: '70%',
		marginHorizontal: 2,
		marginTop: 30,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},

	snapContainer: {
		width: 70,
		height: 70,
		borderWidth: 1,
		marginBottom: 20,
		borderRadius: 10,
		alignItems: 'center',
		borderColor: '#ff0000',
		justifyContent: 'center',
	},

	snap: {
		color: '#fff',
	},

	takePhotoContainer: {
		top: 30,
		left: 10,
		borderWidth: 1,
		borderColor: '#fff',
		position: 'absolute',
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
	},

	sendLabel: {
		color: '#20b2aa',
		fontSize: 20,
	},

	inputContainer: {
		marginHorizontal: 10,
	},

	input: {
		height: 50,
		borderWidth: 1,
		borderColor: 'transparent',
		borderBottomColor: '#20b2aa',
	},
});

export default CreateScreen;
