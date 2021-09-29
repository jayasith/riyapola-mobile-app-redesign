import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import ParagraphText from "../texts/ParagraphText";



const NotificationCard = ({  style, title, time }) => {
	return (
        
		<TouchableOpacity style={[styles.container, style]}>
			
				<Text style={styles.text}>{title}</Text>
                <View>
                <Text style={styles.text}>{time}</Text>
                </View>
            
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.secondary,
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 25,
		paddingVertical: 25,
		paddingHorizontal: 15,
		borderRadius: 1,
		overflow: "hidden",
		marginBottom: 20,
	},

	text: {
		fontFamily: "poppins-medium",
		fontSize: 18,
		color: colors.textPrimary,
		width: "100%",
		marginRight: 20,
	},
  time: {
		fontFamily: "poppins-medium",
		fontSize: 18,
		color: colors.primary,
		width: "100%",
		marginRight: 20,
  },
  
});

export default NotificationCard;
