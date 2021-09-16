import React from "react";
import { View, StyleSheet, StatusBar, Image } from "react-native";

import colors from "../config/colors";

const WelcomeScreen = () => {
	return (
		<View style={styles.background}>
			<Image style={styles.logo} source={require("../assets/logo.png")} />
			<View>
				<Image
					style={styles.illustration}
					source={require("../assets/illustration.png")}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "center",
		backgroundColor: colors.secondary,
	},

	illustration: {
		left: 0,
	},

	logo: {
		position: "absolute",
		top: 50,
		alignSelf: "center",
		zIndex: 2,
	},
});

export default WelcomeScreen;
