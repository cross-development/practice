//Core
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, ImageBackground, Text } from 'react-native';
import { TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Dimensions } from 'react-native';
//Assets
import bgImage from '../../assets/images/bg-food.jpg';

const initialState = {
	email: '',
	password: '',
};

export default function LoginScreen({ navigation }) {
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const [state, setState] = useState(initialState);

	const [dimensions, setDimensions] = useState(Dimensions.get('window').width - 25 * 2);

	useEffect(() => {
		const onChange = () => {
			const width = Dimensions.get('window').width - 25 * 2;
			setDimensions(width);
		};
		Dimensions.addEventListener('change', onChange);

		return () => {
			Dimensions.removeEventListener('change', onChange);
		};
	}, []);

	const keyboardHide = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
		setState(initialState);
	};

	const changeInputEmail = value => setState(prevState => ({ ...prevState, email: value }));
	const changeInputPass = value => setState(prevState => ({ ...prevState, password: value }));

	return (
		<TouchableWithoutFeedback onPress={keyboardHide}>
			<View style={styles.container}>
				<ImageBackground style={styles.bgImage} source={bgImage}>
					<View style={{ ...styles.form, width: dimensions }}>
						<View>
							<Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
							<TextInput
								style={styles.textInput}
								onFocus={() => setIsShowKeyboard(true)}
								value={state.email}
								onChangeText={changeInputEmail}
							/>
						</View>
						<View style={{ marginTop: 20 }}>
							<Text style={styles.inputLabel}>PASSWORD</Text>
							<TextInput
								style={styles.textInput}
								secureTextEntry={true}
								onFocus={() => setIsShowKeyboard(true)}
								value={state.password}
								onChangeText={changeInputPass}
							/>
						</View>
						<TouchableOpacity
							style={styles.button}
							activeOpacity={0.8}
							onPress={keyboardHide}
						>
							<Text style={styles.buttonLabel}>SIGN IN</Text>
						</TouchableOpacity>

						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => navigation.navigate('Register')}
						>
							<Text style={styles.navText}>
								New to application?
								<Text style={styles.navLabel}> Sign Up</Text>
							</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
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
		alignItems: 'center',
	},

	form: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		// marginHorizontal: 50,
		borderWidth: 1,
		borderColor: '#fffaf0',
		paddingTop: 30,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 30,
	},

	inputLabel: {
		textAlign: 'center',
		color: '#fffaf0',
		fontSize: 18,
		marginBottom: 6,
		fontFamily: 'ArchitectsDaughter',
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
		fontFamily: 'ArchitectsDaughter',
	},

	navText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 18,
		marginTop: 20,
		fontFamily: 'ArchitectsDaughter',
	},

	navLabel: {
		color: '#eb4d4b',
		textAlign: 'center',
		fontSize: 18,
		marginTop: 20,
		fontFamily: 'ArchitectsDaughter',
	},
});
