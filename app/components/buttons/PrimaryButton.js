import React from "react";
import { Text, View, StyleSheet } from "react-native";

import colors from "../../config/colors";

const PrimaryButton = ({ title }) => {
	return (
		<View style={styles.button}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "75%",
		padding: 20,
		top: 60,
		alignSelf: "center",
	},
	text: {
		fontFamily: "poppins-medium",
		color: colors.white,
		fontSize: 18,
	},
});

export default PrimaryButton;
