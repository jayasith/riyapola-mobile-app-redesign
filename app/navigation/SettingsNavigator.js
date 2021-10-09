import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ContactUsScreen from "../screens/ContactUsScreen";
import HelpScreen from "../screens/HelpScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TermsAndConditions from "../screens/TermsAndConditions";

const screens = {
  SettingsScreen: {
    screen: SettingsScreen,
  },
  HelpScreen: {
    screen: HelpScreen,
  },
  ContactUsScreen: {
    screen: ContactUsScreen,
  },
  TermsAndConditions: {
    screen: TermsAndConditions,
  },
};
const SettingsNavigator = createStackNavigator(screens);
export default createAppContainer(SettingsNavigator);
