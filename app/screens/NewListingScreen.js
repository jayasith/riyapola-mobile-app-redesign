import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";

import TextInputWithIcon from "../components/inputs/TextInputWithIcon";
import TitleText from "../components/texts/TitleText";

import colors from "../config/colors";

const NewListingScreen = () => {
	return (
		<View>
			<StatusBar backgroundColor={colors.white} barStyle="dark-content" />
			<TitleText style={styles.title}>New Listing</TitleText>
			<TextInputWithIcon placeholder="Title " icon="create" />
			<TextInputWithIcon placeholder="Price " icon="attach-money" />
			<TextInputWithIcon placeholder="Description " icon="subtitles" />
			<TextInputWithIcon placeholder="Location " icon="location-on" />
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
});

export default NewListingScreen;
