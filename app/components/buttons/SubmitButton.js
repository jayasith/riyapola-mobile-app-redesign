import React from "react";
import { useFormikContext } from "formik";

import PrimaryButton from "./PrimaryButton";

const SubmitButton = ({ title, style }) => {
	const { handleSubmit } = useFormikContext();

	return <PrimaryButton title={title} style={style} onPress={handleSubmit} />;
};

export default SubmitButton;
