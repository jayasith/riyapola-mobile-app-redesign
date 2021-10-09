import React from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import TextInputWithright from "../inputs/TextInputWithright";
import Error from "../toasts/Error";

const ErrorInputWithRI = ({ name, ...other }) => {
	const { errors, setFieldTouched, setFieldValue, touched, values } =
		useFormikContext();
	return (
		<>
			<Error error={errors[name]} visible={touched[name]} />
			<TextInputWithright
				{...other}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				onBlur={() => setFieldTouched(name)}
			/>
		</>
	);
};

export default ErrorInputWithRI;
