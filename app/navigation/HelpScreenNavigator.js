import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContactUsScreen from "../screens/ContactUsScreen";
import HelpScreen from "../screens/HelpScreen";
import TermsAndConditions from "../screens/TermsAndConditions";

const Stack = createStackNavigator();
export const HelpScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Contact Us" component={ContactUsScreen} />
      <Stack.Screen
        name="Terms And Conditions"
        component={TermsAndConditions}
      />
    </Stack.Navigator>
  );
};
