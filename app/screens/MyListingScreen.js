import React from "react";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import TextInputWithright from "../components/inputs/TextInputWithright";
import colors from "../config/colors";
import TitleText from "../components/texts/TitleText";
import Card from "../components/cards/Card";
import listings from "../api/controllers/listings.controller";
import useFetch from "../hooks/useFetch";

const MyListingScreen = () => {
	const [text, setText] = useState("");
	const [state, setState] = useState({ data: [], loading: false }); // only one data source
	const { data, loading } = state;
	const {
		data: latestListings,
		error,
		getData: getLatestListings,
	} = useFetch(listings.getByUserListing);

	const filterdData = text // based on text, filter data and use filtered data
		? latestListings.filter((item) => {
				console.log(item.title);
				const itemData = item.title;
				const textData = text;
				return itemData.indexOf(textData) > -1;
				// const itemData = item.Country.toUpperCase();
				// const textData = text.toUpperCase();
				// return itemData.indexOf(textData) > -1;
		  })
		: latestListings; // on on text, u can return all data
	// console.log(data);
	console.log(filterdData);

	useEffect(() => {
		getLatestListings();
	}, []);

	return (
		<View>
			<TitleText style={styles.title}>My Listings</TitleText>
			{loading === false ? (
				<>
					<View>
						<TextInputWithright
							name="search"
							placeholder="Search here"
							icon="magnify"
							onChangeText={(text) => {
								setText(text);
								// console.log(text);
							}}
							value={text}
						/>
					</View>
					<ScrollView>
						<View style={styles.cardsContainer}>
							{filterdData.map((latestListing) => (
								<Card
									key={latestListing.id}
									image={latestListing.images[0].url}
									title={latestListing.title}
									price={latestListing.price}
									seller="Nanduni"
									date={new Date().toDateString()}
								/>
							))}
						</View>
					</ScrollView>
				</>
			) : (
				<Text>loading</Text>
			)}
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
