import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import ImageInputList from "../inputs/ImageInputList";
import Error from "../toasts/Error";

const ImagePickerWithError = ({ name }) => {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	const handleAdd = (uri) => {
		setFieldValue(name, [...values[name], uri]);
	};

	const handleRemove = (uri) => {
		setFieldValue(
			name,
			values[name].filter((imageUri) => imageUri !== uri)
		);
	};

	return (
		<>
			<Error error={errors[name]} visible={touched[name]} />
			<ImageInputList
				imageUris={values[name]}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
		</>
	);
};

const styles = StyleSheet.create({});

export default ImagePickerWithError;
