//Core
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { loadAsync } from 'expo-font';
import { AppLoading } from 'expo';
import { useRoute } from './router/router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import db from './firebase/config';

const loadApplication = async () => {
	await loadAsync({
		ArchitectsDaughter: require('./assets/fonts/architects_daughter/ArchitectsDaughter-Regular.ttf'),
	});
};

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const [user, setUser] = useState(null);

	db.auth().onAuthStateChanged(user => setUser(user));

	const routing = useRoute(user);

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
		<Provider store={store}>
			<NavigationContainer>{routing}</NavigationContainer>
		</Provider>
	);
}
