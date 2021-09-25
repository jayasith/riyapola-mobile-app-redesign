import React from "react";
import { StyleSheet } from "react-native";

import ParagraphText from "../texts/ParagraphText";

const Error = ({ error }) => {
	return error ? (
		<ParagraphText style={styles.error}>{error}</ParagraphText>
	) : null;
};

const styles = StyleSheet.create({
	error: {
		color: "#FF5371",
		paddingLeft: 30,
	},
});

export default Error;
