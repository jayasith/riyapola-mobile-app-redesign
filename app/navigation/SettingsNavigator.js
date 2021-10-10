import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HelpScreen from "../screens/HelpScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { HelpScreenNavigator } from "./HelpScreenNavigator";
import ChangeEmail from "../screens/ChangeEmail";
import Changepassword from "../screens/Changepassword";

const Stack = createStackNavigator();
const SettingsNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="Settings" component={SettingsScreen} />
		<Stack.Screen name="Changepassword" component={Changepassword} />
		<Stack.Screen name="ChangeEmail" component={ChangeEmail} />
		<Stack.Screen name="Help" component={HelpScreenNavigator} />
	</Stack.Navigator>
);

export default SettingsNavigator;
