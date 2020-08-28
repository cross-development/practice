import React from 'react';
import { StyleSheet, TextInput, View, ImageBackground, Text } from 'react-native';
import bgImage from './assets/bg-img/bg-food.jpg';

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.bgImage} source={bgImage}>
				<View style={styles.form}>
					<View>
						<Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
						<TextInput style={styles.textInput} />
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.inputLabel}>PASSWORD</Text>
						<TextInput style={styles.textInput} secureTextEntry={true} />
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},

	bgImage: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		// alignItems: 'center',
	},

	form: {
		marginHorizontal: 50,
		borderWidth: 1,
		borderColor: '#fffaf0',
		paddingTop: 40,
		paddingBottom: 40,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 20,
	},

	inputLabel: {
		textAlign: 'center',
		color: '#fffaf0',
		fontSize: 18,
		marginBottom: 6,
	},

	textInput: {
		color: '#fffaf0',
		borderWidth: 2,
		borderColor: '#fffaf0',
		borderRadius: 10,
		textAlign: 'center',
		padding: 5,
		fontSize: 18,
	},
});
