import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PersonalData from "../screens/Personaldata";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
const Stack = createStackNavigator();
const ProfileNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="PersonalData" component={PersonalData} />
		<Stack.Screen name="Login" component={LoginScreen} />
	</Stack.Navigator>
);

export default ProfileNavigator;
