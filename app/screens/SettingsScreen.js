import React from "react";
import { View, StatusBar, StyleSheet, TextInput } from "react-native";
import TitleText from "../components/texts/TitleText";
import colors from "../config/colors";
import TextWithIcon from "../components/inputs/TextWithIcon";
import HelpScreen from "./HelpScreen";
const SettingsScreen = ({ navigation }) => {
	return (
		<View>
			<StatusBar backgroundColor={colors.white} barStyle="dark-content" />
			<TitleText style={styles.title}>Settings</TitleText>

			<TextWithIcon title="Notification" icon="notification" />
			<TextWithIcon title="Dark Theme" icon="moon" />
			<View style={styles.line} />
			<TextWithButton
				title="Change Email"
				icon="email"
				OnPress={() => {
					navigation.navigate("ChangeEmail");
				}}
			/>
			<TextWithButton
				title="Change Password"
				icon="change"
				OnPress={() => navigation.navigate("Changepassword")}
			/>
			<TextWithButton
				title="Help"
				icon="help"
				OnPress={() => navigation.navigate("Help")}
			/>
			<View style={styles.line} />
		</View>
	);
};
const styles = StyleSheet.create({
	title: {
		paddingTop: 30,
		paddingBottom: 20,
		left: 150,
	},
	line: {
		borderBottomColor: "#9fa098",
		borderBottomWidth: 0.7,
		flexDirection: "row",
		marginHorizontal: 40,

		marginTop: 13,
	},
});

export default SettingsScreen;
