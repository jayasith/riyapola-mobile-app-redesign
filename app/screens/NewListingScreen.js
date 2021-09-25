import React, { useState } from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import CategoryPicker from "../components/pickers/CategoryPicker";
import SubmitButton from "../components/buttons/SubmitButton";
import TitleText from "../components/texts/TitleText";

import categories from "../config/categories";
import colors from "../config/colors";
import FormInputWithError from "../components/inputs/FormInputWithError";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().label("Title"),
	price: Yup.number().required().label("Price"),
	description: Yup.string().required().label("Description"),
	location: Yup.string().required().label("Location"),
});

const NewListingScreen = () => {
	const [category, setCategory] = useState(categories[0]);

	return (
		<Formik
			initialValues={{
				title: "",
				price: "",
				category: "",
				description: "",
				location: "",
			}}
			onSubmit={(values) => console.log(values)}
			validationSchema={validationSchema}
		>
			{() => (
				<>
					<StatusBar backgroundColor={colors.white} barStyle="dark-content" />
					<TitleText style={styles.title}>New Listing</TitleText>
					<FormInputWithError placeholder="Title " icon="create" name="email" />
					<FormInputWithError
						placeholder="Price "
						icon="attach-money"
						keyboardType="decimal-pad"
						name="price"
					/>
					<CategoryPicker
						selectedItem={category}
						onSelectItem={(category) => setCategory(category)}
						placeholder="Category "
						icon="apps"
						categories={categories}
					/>
					<FormInputWithError
						placeholder="Description "
						icon="subtitles"
						name="description"
					/>
					<FormInputWithError
						placeholder="Location "
						icon="location-on"
						name="location"
					/>
					<SubmitButton title="Save" style={{ width: "90%", top: 20 }} />
				</>
			)}
		</Formik>
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
