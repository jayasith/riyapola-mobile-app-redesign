import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/Search";
import SearchFilter from "../screens/SearchFilter";
import SingleItem from "../screens/SingleItem";

const Stack = createStackNavigator();

const AllListingNavigation = () => {
    return (
        <Stack.Navigator mode='modal'>
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
            <Stack.Screen name="Filter" component={SearchFilter} options={{ headerShown: false }} />
            <Stack.Screen name="SingleItem" component={SingleItem} options={{ headerShown: false }}/>
	</Stack.Navigator>
    )
}

export default AllListingNavigation
