import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import NewListingScreen from "../screens/NewListingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Welcome"
			component={WelcomeScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name="Login" component={LoginScreen} />
		<Stack.Screen name="Home" component={HomeScreen} />
		<Stack.Screen name="New Listing" component={NewListingScreen} />
	</Stack.Navigator>
);

export default AuthNavigator;
