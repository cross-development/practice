//Core
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import PostsScreen from '../screens/mainScreens/PostsScreen';
import CreateScreen from '../screens/mainScreens/CreateScreen';
import ProfileScreen from '../screens/mainScreens/ProfileScreen';
//Icons
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = isAuth => {
	if (!isAuth) {
		return (
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
		);
	}

	return (
		<MainTab.Navigator tabBarOptions={{ showLabel: false }}>
			<MainTab.Screen
				options={{
					tabBarIcon: ({ focused, size, color }) => (
						<MaterialCommunityIcons name="postage-stamp" size={size} color={color} />
					),
				}}
				name="Posts"
				component={PostsScreen}
			/>
			<MainTab.Screen
				options={{
					tabBarIcon: ({ focused, size, color }) => (
						<AntDesign name="pluscircleo" size={size} color={color} />
					),
				}}
				name="Create"
				component={CreateScreen}
			/>
			<MainTab.Screen
				options={{
					tabBarIcon: ({ focused, size, color }) => (
						<MaterialCommunityIcons name="face-profile" size={size} color={color} />
					),
				}}
				name="Profile"
				component={ProfileScreen}
			/>
		</MainTab.Navigator>
	);
};
