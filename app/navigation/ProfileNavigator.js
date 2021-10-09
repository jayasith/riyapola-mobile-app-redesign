import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PersonalData from "../screens/Personaldata";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
const Stack = createStackNavigator();
const ProfileNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="ProfileScreen" component={ProfileScreen} />

		<Stack.Screen name="PersonalData" component={PersonalData} />
		<Stack.Screen name="SettingsScreen" component={SettingsScreen} />

		<Stack.Screen name="Login" component={LoginScreen} />
	</Stack.Navigator>
);

export default ProfileNavigator;
