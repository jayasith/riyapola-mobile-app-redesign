import React, { useState } from "react";
import { View, StatusBar, Text, StyleSheet, ScrollView } from "react-native";
import TitleText from "../components/texts/TitleText";
import PrimaryButton from "../components/buttons/PrimaryButton";
import DatePicker from "../components/pickers/Datepicker";
import TextInputWithright from "../components/inputs/TextInputWithright";
import RadioButtons from "../components/inputs/RadioButtons";
import ImageInput from "../components/inputs/ImageInput";
import * as Yup from "yup";

import colors from "../config/colors";

// const ValidationSchema = Yup.object({
// 	name: Yup.string().required(),
// 	Birthdate: Yup.date.required(),
// 	Gender: Yup.boolean.required().oneOf([0, 1]),
// 	Job: Yup.string.required(),
// 	Location: Yup.string.required(),
// });
// const initialValues = {
// 	name: "",
// 	Birthdate: new Date(),
// 	Gender: 0,
// 	Job: "Sotware Engineer",
// 	Location: "",
// };
const PersonalData = () => {
	return (
		<ScrollView>
			<TitleText style={styles.title}>Personal data</TitleText>
			<ImageInput />
			<Text style={styles.container}>Your Name :</Text>
			<TextInputWithright placeholder="Your Name" icon="account-outline" />

			<Text style={styles.container}>Birth date :</Text>
			<DatePicker />
			<Text style={styles.container}>Gender :</Text>
			<RadioButtons />
			<Text style={styles.container}>Your Job :</Text>
			<TextInputWithright placeholder="Your Job" icon="briefcase-outline" />
			<Text style={styles.container}>Your Location :</Text>
			<TextInputWithright placeholder="Your Location" icon="map-marker" />
			<PrimaryButton
				title="Save"
				style={{ width: "90%", top: 20, marginBottom: 60, marginTop: 20 }}
			/>
		</ScrollView>
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
});

export default PersonalData;
