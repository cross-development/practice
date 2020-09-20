import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
	return (
		<View style={styles.container}>
			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					longitude: 30.635072,
					latitude: 50.401206,
					latitudeDelta: 0.01,
					longitudeDelta: 0.006,
				}}
			>
				<Marker coordinate={{ longitude: 30.635072, latitude: 50.401206 }} />
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
});

export default MapScreen;
