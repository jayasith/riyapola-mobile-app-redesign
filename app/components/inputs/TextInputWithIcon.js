import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

const TextInputWithIcon = ({ icon, ...others }) => {
	return (
		<View style={styles.container}>
			{icon && <MaterialIcons name={icon} size={25} style={styles.icon} />}
			<TextInput {...others} style={styles.text} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.secondary,
		flexDirection: "row",
		marginHorizontal: 25,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 20,
	},

	icon: {
		color: colors.textPrimary,
		marginRight: 10,
	},

	text: {
		fontFamily: "poppins-medium",
		fontSize: 18,
		color: colors.textPrimary,
		width: "100%",
		marginRight: 20,
	},
});

export default TextInputWithIcon;
