import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, StatusBar, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";
import listings from "../api/controllers/listings.controller";

import CategoryButton from "../components/buttons/CategoryButton";
import SubtitleText from "../components/texts/SubtitleText";
import ParagraphText from "../components/texts/ParagraphText";
import Card from "../components/cards/Card";

const WelcomeScreen = () => {
	const [latestListings, setLatestListings] = useState([]);

	useEffect(() => {
		getLatestListings();
	}, []);

	const getLatestListings = async () => {
		const res = await listings.getListings();
		console.log(res.data);
		setLatestListings(res.data);
	};

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
			<View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={styles.categories}>
						<CategoryButton title="Vehicles" />
						<CategoryButton title="Electronics" />
						<CategoryButton title="Property" />
						<CategoryButton title="Furniture" />
						<CategoryButton title="Sports" />
						<CategoryButton title="Clothing" />
					</View>
				</ScrollView>
			</View>
			<View style={{ paddingLeft: 25, paddingVertical: 30, paddingBottom: 10 }}>
				<SubtitleText>Latest Listings</SubtitleText>
			</View>
			<ScrollView
				showsVerticalScrollIndicator={false}
				decelerationRate={"normal"}
			>
				{latestListings.length > 0 ? (
					<View style={styles.cardsContainer}>
						{latestListings.map((latestListing) => (
							<Card
								key={latestListing.id}
								image={latestListing.images[0].url}
								title={latestListing.title}
								price={latestListing.price}
								seller="Thushara"
								date={new Date().toDateString()}
							/>
						))}
					</View>
				) : (
					<ParagraphText> No Latest Listings Found</ParagraphText>
				)}
			</ScrollView>
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
		top: -60,
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
		marginBottom: 200,
	},
});

export default WelcomeScreen;
