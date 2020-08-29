import React, { useState } from 'react';
import {
	StyleSheet,
	TextInput,
	View,
	ImageBackground,
	Text,
	TouchableOpacity,
	Keyboard,
} from 'react-native';
import bgImage from './assets/bg-img/bg-food.jpg';

export default function App() {
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);

	const keyboardHide = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	};
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.bgImage} source={bgImage}>
				<View style={styles.form}>
					<View>
						<Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
						<TextInput
							style={styles.textInput}
							onFocus={() => setIsShowKeyboard(true)}
						/>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.inputLabel}>PASSWORD</Text>
						<TextInput
							style={styles.textInput}
							secureTextEntry={true}
							onFocus={() => setIsShowKeyboard(true)}
						/>
					</View>
					<TouchableOpacity
						style={styles.button}
						activeOpacity={0.8}
						onPress={keyboardHide}
					>
						<Text style={styles.buttonLabel}>SIGN IN</Text>
					</TouchableOpacity>
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
	},

	form: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		marginHorizontal: 50,
		borderWidth: 1,
		borderColor: '#fffaf0',
		paddingTop: 30,
		paddingBottom: 30,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 30,
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

	button: {
		backgroundColor: '#eb4d4b',
		height: 40,
		borderRadius: 10,
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonLabel: {
		color: '#fffaf0',
		fontSize: 18,
	},
});
