import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateScreen = () => {
	const [camera, setCamera] = useState(null);
	const [photo, setPhoto] = useState(null);

	const takePhoto = async () => {
		const photo = await camera.takePictureAsync();
		setPhoto(photo.uri);
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
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	camera: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},

	snapContainer: {
		width: 70,
		height: 70,
		borderWidth: 1,
		marginBottom: 20,
		borderRadius: 50,
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
});

export default CreateScreen;
