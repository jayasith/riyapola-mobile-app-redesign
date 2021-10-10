import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/toasts/OfflineNotice";

import navigationThemeConfig from "./app/config/navigation.theme.config";
import AuthContext from "./app/api/auth/context";
import storage from "./app/api/auth/storage";

const getFonts = () =>{
	Font.loadAsync({
		"poppins-regular": require("./app/assets/fonts/Poppins-Regular.ttf"),
		"poppins-medium": require("./app/assets/fonts/Poppins-Medium.ttf"),
		"poppins-bold": require("./app/assets/fonts/Poppins-Bold.ttf"),
	});

}

export default function App({ navigation }) {
	const [fontLoaded, setFontLoaded] = useState(false);
	const [user, setUser] = useState(null);
	const unsubscribe = NetInfo.addEventListener((netInfo) =>
		console.log(netInfo)
	);
	unsubscribe();
	LogBox.ignoreAllLogs();

	const resetUser = async() => {
		const user = await storage.getUser();
		if(user){ setUser(user);}
	}
	useEffect(() => {
		resetUser();
		
	}, [])

	if (fontLoaded) {
		return (
			<AuthContext.Provider value={{user, setUser}}>
				<OfflineNotice />
				<NavigationContainer theme={navigationThemeConfig}>
					{user ? <AppNavigator/> : <AuthNavigator />}
				</NavigationContainer>
			</AuthContext.Provider>
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
