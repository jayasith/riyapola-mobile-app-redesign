import { Touchable, View, StyleSheet, Text, Button } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import { IconButton, Colors } from "react-native-paper";

TextWithButton = ({ icon, title, link, onPress }) => {
	return (
		<View style={styles.container} >
			<View style={styles.container1}>
				<MaterialCommunityIcons name={icon} size={25} style={styles.icon} />
				<Text style={styles.text}>{title}</Text>
			</View>
			<IconButton
				style={styles.icon1}
				icon="chevron-right"
				color={Colors.gray200}
				size={24}
				onPress={onPress}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginHorizontal: 24,
		paddingVertical: 1,
		paddingHorizontal: 15,
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 15,
		marginTop: 15,
		justifyContent: "space-between",
	},
	container1: {
		flexDirection: "row",
	},
	icon: {
		color: colors.textPrimary,
		marginRight: 10,
		marginTop: 10,
		padding: 8,
		backgroundColor: colors.secondary,
		borderRadius: 10,
	},
	icon1: {
		color: colors.textPrimary,
		marginRight: 10,
		marginTop: 10,
		padding: 8,
		borderRadius: 10,
	},
	text: {
		color: colors.textPrimary,
		fontSize: 15,
		marginLeft: 10,

		marginTop: 17,
	},
});

export default TextWithButton;
