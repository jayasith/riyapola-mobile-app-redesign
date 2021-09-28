import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";

import colors from "../../config/colors";
import ParagraphText from "../texts/ParagraphText";
import TopicText from "../texts/TopicText";

const Card = ({ title, date, image, seller, price }) => {
	return (
		<TouchableOpacity style={styles.cardContainer}>
			<View>
				<View style={styles.price}>
					<ParagraphText style={{ color: colors.textPrimary }}>
						Rs. {price}
					</ParagraphText>
				</View>
				{console.log(image)}
				<Image source={{ uri: image }} style={styles.image} />
			</View>
			<View style={styles.textContainer}>
				<View>
					<TopicText>{title}</TopicText>
					<ParagraphText>{date}</ParagraphText>
				</View>
				<ParagraphText>By {seller}</ParagraphText>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	text: {
		fontFamily: "poppins-bold",
		fontSize: 50,
		fontWeight: "600",
		color: colors.textPrimary,
	},

	cardContainer: {
		backgroundColor: colors.secondary,
		overflow: "hidden",
		shadowColor: "black",
		shadowRadius: 100,
		shadowOpacity: 1,
		borderRadius: 12,
		marginBottom: 20,
	},

	image: {
		width: "100%",
		top: 0,
		width: 400,
		height: 150,
	},

	price: {
		position: "absolute",
		elevation: 1,
		backgroundColor: "rgba(255,255,255, .4)	",
		top: 12,
		left: 10,
		paddingVertical: 2,
		paddingHorizontal: 8,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},

	textContainer: {
		paddingHorizontal: 15,
		paddingVertical: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

export default Card;
