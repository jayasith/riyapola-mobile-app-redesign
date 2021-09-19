import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

const ParagraphText = ({ children, style }) => {
	return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontFamily: "poppins-medium",
		fontSize: 15,
		fontWeight: "500",
		color: colors.textSecondary,
	},
});

export default ParagraphText;
