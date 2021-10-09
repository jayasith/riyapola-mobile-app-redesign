import React from 'react'
import { Text, StyleSheet } from "react-native";

import colors from "../../config/colors";
 const SubTopic  = ({ children, style }) => {
	return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontFamily: "poppins-medium",
		fontSize:26,
		fontWeight: "500",
		color: colors.textPrimary,
	},
});
export default SubTopic;