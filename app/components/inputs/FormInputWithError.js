import React from "react";
import { useFormikContext } from "formik";

import TextInputWithIcon from "../inputs/TextInputWithIcon";
import Error from "../toasts/Error";

const FormInputWithError = ({ name, ...other }) => {
	const { errors, setFieldTouched, setFieldValue, touched, values } =
		useFormikContext();

	return (
		<>
			<Error error={errors[name]} visible={touched[name]} />
			<TextInputWithIcon
				{...other}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				onBlur={() => setFieldTouched(name)}
			/>
		</>
	);
};

export default FormInputWithError;
