//Core
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { loadAsync } from 'expo-font';
import { AppLoading } from 'expo';
import { useRoute } from './router/router';

const loadApplication = async () => {
	await loadAsync({
		ArchitectsDaughter: require('./assets/fonts/architects_daughter/ArchitectsDaughter-Regular.ttf'),
	});
};

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const routing = useRoute(true);

	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadApplication}
				onFinish={() => setIsReady(true)}
				onError={console.warn}
			/>
		);
	}

	return <NavigationContainer>{routing}</NavigationContainer>;
}
