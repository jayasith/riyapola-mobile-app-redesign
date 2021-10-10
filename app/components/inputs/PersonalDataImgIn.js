import { IconButton, Colors } from "react-native-paper";
import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../../config/colors";

PersonalDataIMIn = () => {
	return (
		<View>
			<Image
				source={require("../../assets/images/icon.png")}
				style={style.image}
			/>
			<IconButton
				icon="camera-plus"
				color={Colors.grey600}
				style={style.cam}
				size={36}
				onPress={() => console.log("Pressed")}
			/>

			<View></View>
		</View>
	);
};
const style = StyleSheet.create({
	image: {
		marginTop: 20,
		width: 140,
		height: 140,
		borderRadius: 10,
		marginLeft: 135,
		position: "absolute",
		marginBottom: 50,
	},
	container: {
		flexDirection: "row",
		marginHorizontal: 150,
		backgroundColor: colors.primary,
		paddingVertical: 0,
		paddingHorizontal: 60,
		height: 110,
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 0,
	},
	cam: {
		marginLeft: 240,
		marginTop: 125,
	},
});

export default PersonalDataIMIn;
