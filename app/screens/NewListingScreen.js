import React, { useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from "../components/pickers/CategoryPickerItem";
import Form from "../components/forms/Form";
import FormInputWithError from "../components/inputs/FormInputWithError";
import ImageInputList from "../components/inputs/ImageInputList";
import PickerWithError from "../components/pickers/PickerWithError";
import SubmitButton from "../components/buttons/SubmitButton";
import TitleText from "../components/texts/TitleText";

import categories from "../config/categories";
import colors from "../config/colors";
import ImagePickerWithError from "../components/pickers/ImagePickerWithError";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).label("Price"),
	category: Yup.string().required().nullable().label("Category"),
	description: Yup.string().required().label("Description"),
	location: Yup.string().required().nullable().label("Location"),
	images: Yup.array().required().min(1, "Please select at least one image"),
});

const NewListingScreen = () => {
	return (
		<Form
			initialValues={{
				title: "",
				price: "",
				category: null,
				description: "",
				location: "",
				images: [],
			}}
			onSubmit={(values) => console.log(values)}
			validationSchema={validationSchema}
		>
			<StatusBar backgroundColor={colors.white} barStyle="dark-content" />
			<TitleText style={styles.title}>New Listing</TitleText>
			<ImagePickerWithError name="images" />
			<FormInputWithError
				placeholder="Title "
				icon="create"
				name="title"
				maxLength={255}
			/>
			<FormInputWithError
				placeholder="Price "
				icon="attach-money"
				keyboardType="decimal-pad"
				name="price"
			/>
			<PickerWithError
				name="category"
				placeholder="Category "
				icon="apps"
				items={categories}
				numberOfColumns={3}
				PickerItemComponent={CategoryPickerItem}
			/>
			<FormInputWithError
				placeholder="Description "
				icon="subtitles"
				name="description"
				multiline
				numberOfLines={5}
				style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
			/>
			<FormInputWithError
				placeholder="Location "
				icon="location-on"
				name="location"
			/>
			<SubmitButton title="Save" style={{ width: "90%", top: 20 }} />
		</Form>
	);
};

const styles = StyleSheet.create({
	title: {
		paddingTop: 30,
		paddingBottom: 20,
		left: 30,
	},
});

export default NewListingScreen;
