//Core
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { loadAsync } from 'expo-font';
//Components
import Main from './components/Main';
//Redux
import { store } from './redux/store';
import { Provider } from 'react-redux';

const loadApplication = async () => {
	await loadAsync({
		ArchitectsDaughter: require('./assets/fonts/architects_daughter/ArchitectsDaughter-Regular.ttf'),
	});
};

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
		<Provider store={store}>
			<Main />
		</Provider>
	);
}
