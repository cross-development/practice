import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as Location from 'expo-location';
import db from '../../firebase/config';

const CreateScreen = ({ navigation }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [camera, setCamera] = useState(null);
	const [photo, setPhoto] = useState(null);
	const [comment, setComment] = useState('');
	const [location, setLocation] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			await MediaLibrary.requestPermissionsAsync();

			setHasPermission(status === 'granted');
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const { status } = await Location.requestPermissionsAsync();

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);

	if (hasPermission === null) return <View />;
	if (hasPermission === false) return <Text>No access to camera</Text>;

	const takePhoto = async () => {
		const { uri } = await camera.takePictureAsync();
		await MediaLibrary.createAssetAsync(uri);
		const location = await Location.getCurrentPositionAsync();

		setPhoto(uri);
	};

	const sendPhoto = () => {
		uploadPhotoToServer();
		navigation.navigate('DefaultScreen', { photo });
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
		// flex: 1,
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
		borderColor: '#fff',
		borderBottomColor: '#20b2aa',
	},
});

export default CreateScreen;
