import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import PickerIcon from "./PickerIcon";
import ParagraphText from "../texts/ParagraphText";

const CategoryPickerItem = ({ item, onPress }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<PickerIcon backgroundColor={item.backgroundColor} name={item.icon} />
				<ParagraphText style={styles.label}>{item.label}</ParagraphText>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "white",
		marginHorizontal: 38,
		paddingVertical: 20,
	},

	label: { marginTop: 5 },
});

export default CategoryPickerItem;
