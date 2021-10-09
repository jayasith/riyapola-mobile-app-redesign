import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

import { IconButton, Colors } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import colors from "../../config/colors";

const TextDatePicker = () => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [date, setDate] = useState(new Date());
	const [brithDate, setBirthDate] = useState("");

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		console.warn("A date has been picked: ", date);
		setDate(date);
		setBirthDate(date.toLocaleString());
		hideDatePicker();
	};
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.text}
				placeholder="Your Birth date"
				value={brithDate}
			/>

			<IconButton
				style={styles.icon}
				icon="calendar-blank"
				color={Colors.gray200}
				size={24}
				onPress={showDatePicker}
			/>

			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.secondary,
		flexDirection: "row",
		marginHorizontal: 25,
		paddingVertical: 2,
		paddingHorizontal: 10,
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 20,
	},
	icon: {
		color: colors.textPrimary,
		marginRight: 9,
	},

	text: {
		fontFamily: "poppins-medium",
		fontSize: 18,
		color: colors.textPrimary,
		width: "80%",
		marginRight: 20,
		position: "relative",
	},
});

export default TextDatePicker;
