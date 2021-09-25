import React from "react";
import { useFormikContext } from "formik";

import TextInputWithIcon from "../inputs/TextInputWithIcon";
import Error from "../toasts/Error";

const FormInputWithError = ({ name, ...other }) => {
	const { handleChange, handleSubmit, errors, setFieldTouched, touched } =
		useFormikContext();

	return (
		<>
			<Error error={errors[name]} visible={touched[name]} />
			<TextInputWithIcon
				{...other}
				onChangeText={handleChange(name)}
				onBlur={() => setFieldTouched(name)}
			/>
		</>
	);
};

export default FormInputWithError;
