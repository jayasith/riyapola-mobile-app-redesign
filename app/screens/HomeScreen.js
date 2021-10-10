import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, StatusBar, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import CategoryButton from "../components/buttons/CategoryButton";
import SubtitleText from "../components/texts/SubtitleText";
import ParagraphText from "../components/texts/ParagraphText";
import Card from "../components/cards/Card";

import categories from "../config/categories";
import colors from "../config/colors";
import listings from "../api/controllers/listings.controller";

const WelcomeScreen = ({ navigation }) => {
	const [allListings, setAllListings] = useState([]);
	const [newListings, setNewListings] = useState([]);
	const [isFiltered, setIsFiltered] = useState(false);
	const [error, setError] = useState("");

	const getListings = async () => {
		try {
			const allListings = await listings.getListings();
			setAllListings(allListings.data);
			setNewListings(allListings.data);
		} catch (err) {
			setError("Something went wrong");
		}
	};

	const getCategories = async (id) => {
		if (id === undefined) return getListings();
		const filtered = allListings.filter((listing) => id === listing.categoryId);
		setIsFiltered(true);
		setNewListings(filtered);
	};

	useEffect(() => {
		getListings();
	}, []);

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
						<CategoryButton
							title="All"
							onPress={() => getCategories(undefined)}
						/>
						{categories.map((category) => (
							<CategoryButton
								title={category.label}
								onPress={() => getCategories(category.value)}
							/>
						))}
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
				{!error ? (
					<View style={styles.cardsContainer}>
						{isFiltered
							? newListings.map((latestListing) => (
									<Card
										key={latestListing.id}
										image={latestListing.images[0].url}
										title={latestListing.title}
										price={latestListing.price}
										seller="Thushara"
										date={new Date().toDateString()}
										onPress={() => {
											navigation.navigate("SingleItem", latestListing);
										}}
									/>
							  ))
							: newListings.map((latestListing) => (
									<Card
										key={latestListing.id}
										image={latestListing.images[0].url}
										title={latestListing.title}
										price={latestListing.price}
										seller="Thushara"
										date={new Date().toDateString()}
										onPress={() =>
											navigation.navigate("SingleItem", latestListing)
										}
									/>
							  ))}
					</View>
				) : (
					<ParagraphText style={{ fontSize: 20, paddingHorizontal: 28 }}>
						Something went wrong.
					</ParagraphText>
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
