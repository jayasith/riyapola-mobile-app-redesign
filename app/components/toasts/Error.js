import React from "react";
import { StyleSheet } from "react-native";

import ParagraphText from "../texts/ParagraphText";

const Error = ({ error, visible }) => {
	return error && visible ? (
		<ParagraphText
			style={[styles.error, error.includes("Category") && { paddingLeft: 10 }]}
		>
			{error}
		</ParagraphText>
	) : null;
};

const styles = StyleSheet.create({
	error: {
		color: "#FF5371",
		paddingLeft: 30,
	},
});

export default Error;
