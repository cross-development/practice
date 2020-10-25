//Core
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import MapScreen from '../nestedScreens/MapScreen';
import DefaultScreen from '../nestedScreens/DefaultScreen';
import CommentsScreen from '../nestedScreens/CommentsScreen';

const NestedScreen = createStackNavigator();

const PostsScreen = () => (
	<NestedScreen.Navigator>
		<NestedScreen.Screen name="DefaultScreen" component={DefaultScreen} />
		<NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
		<NestedScreen.Screen name="MapScreen" component={MapScreen} />
	</NestedScreen.Navigator>
);

export default PostsScreen;
