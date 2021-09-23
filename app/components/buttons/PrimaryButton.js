import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../../config/colors";

const PrimaryButton = ({ title, onPress, style }) => {
	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
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
		top: 40,
		alignSelf: "center",
	},
	text: {
		fontFamily: "poppins-medium",
		color: colors.white,
		fontSize: 18,
		letterSpacing: 2,
	},
});

export default PrimaryButton;
