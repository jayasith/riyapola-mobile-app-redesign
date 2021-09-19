import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

const TopicText = ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontFamily: "poppins-bold",
		fontSize: 20,
		fontWeight: "600",
		paddingVertical: 5,
		color: colors.textPrimary,
	},
});

export default TopicText;
