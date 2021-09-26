import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import ForgotpasswordScreen from "./app/screens/ForgotpasswordScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoadingScreen from "./app/screens/LoadingScreen";
import HomeScreen from "./app/screens/HomeScreen";
import NewListingScreen from "./app/screens/NewListingScreen";
import PersonalData from "./app/screens/Personaldata";
import Changepassword from "./app/screens/Changepassword";
import ChangeEmail from "./app/screens/ChangeEmail";
import SearchFilter from "./app/screens/SearchFilter";
import Search from "./app/screens/Search";

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
				<Changepassword/>
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
