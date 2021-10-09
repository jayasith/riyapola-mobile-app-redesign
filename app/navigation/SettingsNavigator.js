import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HelpScreen from "../screens/HelpScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { HelpScreenNavigator } from "./HelpScreenNavigator";

const Stack = createStackNavigator();
const SettingsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Help" component={HelpScreenNavigator} />
  </Stack.Navigator>
);

export default SettingsNavigator;
