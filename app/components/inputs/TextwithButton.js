import { Touchable, View, StyleSheet, Text, Button } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import { IconButton, Colors } from "react-native-paper";

TextWithButton = ({ icon, title }) => {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons name={icon} size={25} style={styles.icon} />
			<Text style={styles.text}>{title}</Text>
			<IconButton
				name="chevron-right"
				color={Colors.gray200}
				size={24}
				style={styles.icon}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.secondary,
		flexDirection: "row",
		marginHorizontal: 38,
		paddingVertical: 1,
		paddingHorizontal: 15,
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 15,
		marginTop: 15,
	},
	icon: {
		color: colors.textPrimary,
		marginRight: 10,
		marginTop: 10,
	},
	text: {
		color: colors.textPrimary,
		fontSize: 15,
		marginLeft: 10,
		width: "85%",
		marginTop: 13,
	},
});

export default TextWithButton;
