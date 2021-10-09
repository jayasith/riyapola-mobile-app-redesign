import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../../config/colors";

const OfflineNotice = () => {
	const netInfo = useNetInfo();

	if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
		return (
			<View style={styles.container}>
				<Text style={styles.text}>No Internet Connection</Text>
			</View>
		);

	return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#e63946",
		justifyContent: "center",
		alignItems: "center",
		height: 60,
		top: 80,
		position: "absolute",
		zIndex: 10,
		width: "100%",
		elevation: Platform.OS === "android" ? 1 : 0,
	},
	text: {
		fontSize: 16,
		fontFamily: "poppins-medium",
		fontWeight: "500",
		color: colors.white,
	},
});
