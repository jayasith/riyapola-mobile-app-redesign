import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import TextInputWithright from "../components/inputs/TextInputWithright";
import colors from "../config/colors";
import TitleText from "../components/texts/TitleText";
import Card from "../components/cards/Card";

const MyListingScreen = () => {
	return (
		<View>
			<TitleText style={styles.title}>My Listings</TitleText>
			<View>
				<TextInputWithright
					name="search"
					placeholder="Search here"
					icon="magnify"
				/>
			</View>
			<ScrollView>
				<View style={styles.cardsContainer}>
					<Card />
				</View>
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	title: {
		paddingTop: 30,
		paddingBottom: 20,
		left: 55,
	},
	input: {
		borderWidth: 1,
		borderColor: "#777",
		margin: 10,
		width: 200,
	},
	icon: {
		color: colors.textPrimary,
		marginRight: 10,
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
	cardsContainer: {
		paddingHorizontal: 30,
		width: "100%",
		marginBottom: 200,
	},
});

export default MyListingScreen;
