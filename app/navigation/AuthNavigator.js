import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignupScreen from "../screens/SignupScreen";
import ForgotpasswordScreen from "../screens/ForgotpasswordScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Welcome"
			component={WelcomeScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
		<Stack.Screen name="SingUp" component={SignupScreen} options={{ headerShown: false }} />
		<Stack.Screen name="ForgotPassword" component={ForgotpasswordScreen} options={{ headerShown: false }}/>
	</Stack.Navigator>
);

export default AuthNavigator;
