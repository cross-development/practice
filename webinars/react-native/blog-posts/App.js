//Core
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { loadAsync } from 'expo-font';
import { AppLoading } from 'expo';
//Components
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

const loadApplication = async () => {
	await loadAsync({
		ArchitectsDaughter: require('./assets/fonts/architects_daughter/ArchitectsDaughter-Regular.ttf'),
	});
};

const AuthStack = createStackNavigator();

export default function App() {
	const [isReady, setIsReady] = useState(false);

	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadApplication}
				onFinish={() => setIsReady(true)}
				onError={console.warn}
			/>
		);
	}

	return (
		<NavigationContainer>
			<AuthStack.Navigator>
				<AuthStack.Screen
					options={{ headerShown: false }}
					name="Login"
					component={LoginScreen}
				/>
				<AuthStack.Screen
					options={{ headerShown: false }}
					name="Register"
					component={RegisterScreen}
				/>
			</AuthStack.Navigator>
		</NavigationContainer>
	);
}
