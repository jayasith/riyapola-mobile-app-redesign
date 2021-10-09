import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsNavigator from "./SettingsNavigator";
import PersonalData from "../screens/Personaldata";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MyListingScreen from "../screens/MyListingScreen";
const Stack = createStackNavigator();
const ProfileNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerShown: false,
		}}
	>
		<Stack.Screen name="ProfileScreen" component={ProfileScreen} />
		<Stack.Screen name="PersonalData" component={PersonalData} />
		<Stack.Screen name="MyListingScreen" component={MyListingScreen} />
 <Stack.Screen name="Settings" component={SettingsNavigator} />
		<Stack.Screen name="Login" component={LoginScreen} />
	</Stack.Navigator>

);

export default ProfileNavigator;
