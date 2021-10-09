import React, { useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import { View, StatusBar, Text, StyleSheet } from "react-native";
import colors from "../../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const radioButtonsData = [
	{
		id: "0", // acts as primary key, should be unique and non-empty string
		label: "Male",
		value: "Male",
		color: "#1652DA",
	},
	{
		id: "1",
		label: "Female",
		value: "Female",
		color: "#1652DA",
	},
];

RadioButtons = () => {
	const [radioButtons, setRadioButtons] = useState(radioButtonsData);

	function onPressRadioButton(radioButtonsArray) {
		setRadioButtons(radioButtonsArray);
	}

	return (
		<View style={styles.container}>
			<RadioGroup
				radioButtons={radioButtons}
				onPress={onPressRadioButton}
				layout="row"
				styles={styles.radio}
				colorScheme="green"
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginHorizontal: 25,
		paddingVertical: 10,
		paddingHorizontal: 1,
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 20,
	},
	radio: {
		width: "100%",
		marginLeft: 50,
		color: colors.primary,
	},
});
export default RadioButtons;
