import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB4dHTCH0MCfyJmxOqOXcwMP3kwySsI17I',
	authDomain: 'rn-social-ff26f.firebaseapp.com',
	databaseURL: 'https://rn-social-ff26f.firebaseio.com',
	projectId: 'rn-social-ff26f',
	storageBucket: 'rn-social-ff26f.appspot.com',
	messagingSenderId: '963548860913',
	appId: '1:963548860913:web:d7c5b1911c8b02c35db450',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
