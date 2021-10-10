import React, { useState, useEffect } from "react";
import { View, StatusBar, Text, StyleSheet, ScrollView } from "react-native";
import TitleText from "../components/texts/TitleText";
import PrimaryButton from "../components/buttons/PrimaryButton";
import DatePicker from "../components/pickers/Datepicker";
import TextInputWithright from "../components/inputs/TextInputWithright";
import RadioButtons from "../components/inputs/RadioButtons";
import PersonalDataIMIn from "../components/inputs/PersonalDataImgIn";
import ErrorInputWithRI from "../components/inputs/ErrorInputWithRI";
import FormInputWithError from "../components/inputs/FormInputWithError";
import Form from "../components/forms/Form";
import * as Yup from "yup";
import colors from "../config/colors";
import user from "../api/controllers/user.controller";
import useFetch from "../hooks/useFetch";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().nullable().label("Name"),
	date: Yup.string().required().nullable().label("Date"),
	job: Yup.string().required().nullable().label("Job"),
	location: Yup.string().required().nullable().label("Location"),
	image: Yup.string().required().min(1, "Please select at least one image"),
});

const PersonalData = () => {
	const [user, setUser] = useState({});
	const getuser = async () => {
		try {
			const res = await fetch("http://192.168.1.3:5000/api/user/2");
			const json = await res.json();
			setUser(json);
			// console.log(json);
		} catch (error) {
			console.log(error);
		}
	};

	const edituser = async () => {
		try {
			fetch("https://mywebsite.com/endpoint/", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstParam: "yourValue",
					secondParam: "yourOtherValue",
				}),
			});
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getuser();
	}, []);
	// console.log(userDeails);
	console.log(user);
	const handleSubmit = async () => {
		console.log("welcome");
	};
	return (
		<Form
			initialValues={{
				name: "",
				date: "",
				job: "",
				location: "",
				image: null,
			}}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<ScrollView>
				<TitleText style={styles.title}>Personal data</TitleText>
				<PersonalDataIMIn name="image" />
				<Text style={styles.container}>Your Name :</Text>
				<ErrorInputWithRI
					name="name"
					placeholder="Your Name"
					icon="account-outline"
					value={user.name}
				/>

				<Text style={styles.container}>Birth date :</Text>
				<DatePicker
					name="date"
					placeholder="select birthdate"
					value={user.BirthDate}
				/>
				<Text style={styles.container}>Gender :</Text>
				<RadioButtons value={user.gender} />
				<Text style={styles.container}>Your Job :</Text>
				<ErrorInputWithRI
					name="job"
					placeholder="Your Job"
					icon="briefcase-outline"
					value={user.Job}
				/>
				<Text style={styles.container}>Your Location :</Text>
				<ErrorInputWithRI
					name="location"
					placeholder="Your Location"
					icon="map-marker"
					value={user.Location}
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
