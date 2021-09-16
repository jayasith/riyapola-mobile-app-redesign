import React from "react";
import { View, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";

import colors from "../config/colors";

const WelcomeScreen = () => {
	return (
		<View style={styles.background}>
			<Image
				style={styles.logo}
				source={require("../assets/images/logo.png")}
			/>
			<View>
				<Image
					style={styles.illustration}
					source={require("../assets/images/illustration.png")}
				/>
			</View>
			<PrimaryButton title="Get Started" />
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
		marginTop: 60,
	},

	logo: {
		position: "absolute",
		top: 80,
		alignSelf: "center",
		zIndex: 2,
	},
});

export default WelcomeScreen;