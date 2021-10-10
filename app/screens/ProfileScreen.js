import { Image, ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import TextWithButton from "../components/inputs/TextwithButton";

const ProfileScreen = ({ navigation }) => {
	// const navigation = useNavigation();

	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					source={require("../assets/images/icon.png")}
					style={styles.image}
				/>
				<Text style={styles.title}>Hi Nanduni</Text>
				<Text style={styles.job}>Teacher</Text>
			</View>
			<View style={styles.line} />
			<TextWithButton
				title="My Listings"
				icon="format-list-bulleted"
				OnPress={() => navigation.navigate("MyListingScreen")}
			/>
			<TextWithButton
				title="Personal Data"
				icon="account"
				OnPress={() => navigation.navigate("PersonalData")}
			/>
			<TextWithButton
				title="Settings"
				icon="cog"
				OnPress={() => navigation.navigate("SettingsScreen")}
			/>
			<View style={styles.line} />
			<TextWithButton title="Rate Us" icon="thumb-up" />
			<TextWithButton title="FAQs" icon="dots-horizontal-circle" />
			<View style={styles.line} />
			<TextWithButton
				title="Log out"
				icon="logout"
				OnPress={() => navigation.navigate("Login")}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	image: {
		marginTop: 20,
		width: 70,
		height: 70,
		borderRadius: 10,
	},
	title: {
		paddingTop: 30,
		paddingBottom: 20,
		left: 30,
		fontSize: 20,
		color: "grey",
	},
	job: {
		fontSize: 10,
		paddingTop: 60,
		right: 70,
		color: "grey",
	},
	container: {
		flexDirection: "row",
		marginHorizontal: 36,
		marginTop: 50,
		marginBottom: 20,
	},
	line: {
		borderBottomColor: "#9fa098",
		borderBottomWidth: 0.7,
		flexDirection: "row",
		marginHorizontal: 40,

		marginTop: 13,
	},
});
export default ProfileScreen;
