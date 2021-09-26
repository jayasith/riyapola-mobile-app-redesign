import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import ChangeEmail from "./app/screens/ChangeEmail";
import Changepassword from "./app/screens/Changepassword";
import ForgotpasswordScreen from "./app/screens/ForgotpasswordScreen";
import HomeScreen from "./app/screens/HomeScreen";
import LoadingScreen from "./app/screens/LoadingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import NewListingScreen from "./app/screens/NewListingScreen";
import PersonalData from "./app/screens/Personaldata";
import SignupScreen from "./app/screens/SignupScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const getFonts = () =>
	Font.loadAsync({
		"poppins-regular": require("./app/assets/fonts/Poppins-Regular.ttf"),
		"poppins-medium": require("./app/assets/fonts/Poppins-Medium.ttf"),
		"poppins-bold": require("./app/assets/fonts/Poppins-Bold.ttf"),
	});

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (fontLoaded) {
		return (
			<>
				<NewListingScreen />
			</>
		);
	} else {
		return (
			<>
				<AppLoading
					startAsync={getFonts}
					onFinish={() => setFontLoaded(true)}
					onError={(err) =>
						console.error("error occurred while loading fonts", err)
					}
				/>
			</>
		);
	}
}
