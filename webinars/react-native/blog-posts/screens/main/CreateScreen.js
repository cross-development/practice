import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateScreen = ({ navigation }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [camera, setCamera] = useState(null);
	const [photo, setPhoto] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}

	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const takePhoto = async () => {
		const photo = await camera.takePictureAsync();
		setPhoto(photo.uri);
	};

	sendPhoto = () => {
		navigation.navigate('Posts', { photo });
	};

	return (
		<View style={styles.container}>
			<Camera style={styles.camera} ref={setCamera}>
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
});

export default CreateScreen;
