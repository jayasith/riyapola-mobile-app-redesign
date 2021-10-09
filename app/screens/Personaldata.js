import React, { useState } from "react";
import { View, StatusBar, Text, StyleSheet, ScrollView } from "react-native";
import TitleText from "../components/texts/TitleText";
import PrimaryButton from "../components/buttons/PrimaryButton";
import DatePicker from "../components/pickers/Datepicker";
import TextInputWithright from "../components/inputs/TextInputWithright";
import RadioButtons from "../components/inputs/RadioButtons";
import ImageInput from "../components/inputs/ImageInput";
import Form from "../components/forms/Form";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(1).label("Name"),
	date: Yup.number().required().min(1).label("Date"),
	job: Yup.object().required().nullable().label("Job"),
	location: Yup.string().required().label("Location"),
	city: Yup.string().required().min(1).label("City"),
	image: Yup.array().required().min(1, "Please select at least one image"),
});

import colors from "../config/colors";

const handleSubmit = async () => {
	console.log("welcome");
};
const PersonalData = () => {
	return (
		<Form
			initialValues={{
				name: "",
				date: new Date(),
				job: "",
				location: "",
				image: null,
			}}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<ScrollView>
				<TitleText style={styles.title}>Personal data</TitleText>
				<ImageInput name="image" />
				<Text style={styles.container}>Your Name :</Text>
				<TextInputWithright
					name="name"
					placeholder="Your Name"
					icon="account-outline"
				/>

				<Text style={styles.container}>Birth date :</Text>
				<DatePicker name="date" placeholder="select birthdate" />
				<Text style={styles.container}>Gender :</Text>
				<RadioButtons />
				<Text style={styles.container}>Your Job :</Text>
				<TextInputWithright
					name="job"
					placeholder="Your Job"
					icon="briefcase-outline"
				/>
				<Text style={styles.container}>Your Location :</Text>
				<TextInputWithright
					name="location"
					placeholder="Your Location"
					icon="map-marker"
				/>
				<PrimaryButton
					title="Save"
					style={{ width: "90%", top: 20, marginBottom: 60, marginTop: 20 }}
				/>
			</ScrollView>
		</Form>
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
