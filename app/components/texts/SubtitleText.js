import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

const SubtitleText = ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontFamily: "poppins-bold",
		fontSize: 30,
		fontWeight: "600",
		color: colors.textPrimary,
	},
});

export default SubtitleText;
