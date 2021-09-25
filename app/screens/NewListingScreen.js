import React, { useState } from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import CategoryPicker from "../components/pickers/CategoryPicker";
import PrimaryButton from "../components/buttons/PrimaryButton";
import TextInputWithIcon from "../components/inputs/TextInputWithIcon";
import TitleText from "../components/texts/TitleText";
import Error from "../components/toasts/Error";

import colors from "../config/colors";
import categories from "../config/categories";

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
			{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
				<>
					<StatusBar backgroundColor={colors.white} barStyle="dark-content" />
					<TitleText style={styles.title}>New Listing</TitleText>
					<Error error={errors.title} visible={touched.title} />
					<TextInputWithIcon
						placeholder="Title "
						icon="create"
						onChangeText={handleChange("title")}
						onBlur={() => setFieldTouched("title")}
					/>
					<Error error={errors.price} visible={touched.price} />
					<TextInputWithIcon
						placeholder="Price "
						icon="attach-money"
						keyboardType="decimal-pad"
						onChangeText={handleChange("price")}
						onBlur={() => setFieldTouched("price")}
					/>
					<CategoryPicker
						selectedItem={category}
						onSelectItem={(category) => setCategory(category)}
						placeholder="Category "
						icon="apps"
						categories={categories}
						// onChangeText={handleChange("category")}
						// onBlur={() => setFieldTouched("category")}
					/>
					<Error error={errors.description} visible={touched.description} />
					<TextInputWithIcon
						placeholder="Description "
						icon="subtitles"
						onChangeText={handleChange("description")}
						onBlur={() => setFieldTouched("description")}
					/>
					<Error error={errors.location} visible={touched.location} />
					<TextInputWithIcon
						placeholder="Location "
						icon="location-on"
						onChangeText={handleChange("location")}
						onBlur={() => setFieldTouched("location")}
					/>
					<PrimaryButton
						title="Save"
						style={{ width: "90%", top: 20 }}
						onPress={handleSubmit}
					/>
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
