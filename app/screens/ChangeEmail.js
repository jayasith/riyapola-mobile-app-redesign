import React from "react";
import { View, StatusBar, StyleSheet,Text } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";

import TextInputWithIcon from "../components/inputs/TextInputWithIcon";

import TitleText from "../components/texts/TitleText";

import colors from "../config/colors";


const ChangeEmail = () => {
	

	return (
		<View>
			<StatusBar backgroundColor={colors.white} barStyle="dark-content" />
			<TitleText style={styles.title}>Change Email</TitleText>
            <Text style={styles.container }>New Email Address</Text>
            <TextInputWithIcon placeholder="Email Address"  />
			<PrimaryButton title="Save" style={{ width: "90%", top: 20 }} />
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		paddingTop: 30,
		paddingBottom: 20,
		left: 30,
    },
    container: {
        fontSize: 18,
		flexDirection: "row",
		marginHorizontal: 25,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 20,
	},
});
export default ChangeEmail;
