import { StatusBar } from "react-native";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";
import CategoryButton from "../components/buttons/CategoryButton";
import SubtitleText from "../components/texts/SubtitleText";
import Card from "../components/cards/Card";

const WelcomeScreen = () => {
	return (
		<View>
			<StatusBar backgroundColor={colors.white} barStyle="dark-content" />
			<View style={styles.upperContainer}>
				<Image
					style={styles.logo}
					source={require("../assets/images/logo.png")}
				/>
				<Feather name="search" size={30} />
			</View>
			<View style={styles.categories}>
				<CategoryButton title="Vehicles" />
				<CategoryButton title="Electronics" />
				<CategoryButton title="Property" />
				<CategoryButton title="Education" />
			</View>
			<View style={{ paddingLeft: 25, paddingVertical: 30 }}>
				<SubtitleText>Latest Listings</SubtitleText>
			</View>
			<View style={styles.cardsContainer}>
				<Card
					image={require("../assets/images/mustang-1969.png")}
					title="Ford Mustang 1969"
					price="50000.00"
					seller="Thushara"
					date={new Date().toDateString()}
				/>
				<Card
					image={require("../assets/images/rs6.png")}
					title="Audi RS6 Avant"
					price="50000.00"
					seller="Thushara"
					date={new Date().toDateString()}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	upperContainer: {
		padding: 30,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	categories: {
		top: -50,
		paddingLeft: 20,
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},

	logo: {
		zIndex: 2,
		width: 130,
		height: 30,
		resizeMode: "contain",
	},

	cardsContainer: {
		paddingHorizontal: 30,
		width: "100%",
	},
});

export default WelcomeScreen;
