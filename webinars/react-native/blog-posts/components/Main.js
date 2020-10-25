//Core
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
//Router
import { useRoute } from '../router/router';
//Redux
import { authSateChangeUser } from '../redux/auh/authOperations';

const Main = () => {
	const { stateChange } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => dispatch(authSateChangeUser()), []);

	const routing = useRoute(stateChange);

	return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
