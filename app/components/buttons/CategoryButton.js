import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../../config/colors";

const CategoryButton = ({ title, onPress }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.secondary,
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingVertical: 8,
		paddingHorizontal: 10,
		top: 60,
		marginHorizontal: 5,
	},
	text: {
		fontFamily: "poppins-medium",
		color: colors.textPrimary,
		fontSize: 15,
		letterSpacing: 1,
	},
});

export default CategoryButton;
