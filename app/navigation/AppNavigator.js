import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	MaterialCommunityIcons,
	Ionicons,
	Feather,
	Entypo,
} from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import NewListingScreen from "../screens/NewListingScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name={"Home"}
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Feather color={color} size={size} name="home" />
					),
				}}
			/>
			<Tab.Screen
				name={"All Listings"}
				component={NewListingScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Entypo color={color} size={size} name="list" />
					),
				}}
			/>
			<Tab.Screen
				name={"New Listing"}
				component={NewListingScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Feather color={color} size={size} name="plus-square" />
					),
				}}
			/>
			<Tab.Screen
				name={"Notifications"}
				component={NewListingScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} size={size} name="notifications-outline" />
					),
				}}
			/>
			<Tab.Screen
				name={"Profile"}
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Feather color={color} size={size} name="user" />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
