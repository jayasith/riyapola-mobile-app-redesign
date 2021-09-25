import React from "react";
import { useFormikContext } from "formik";

import CategoryPicker from "./CategoryPicker";
import Error from "../toasts/Error";

//! icon or name
const PickerWithError = ({ icon, name, categories, placeholder }) => {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	return (
		<>
			<CategoryPicker
				categories={categories}
				onSelectItem={(category) => setFieldValue(name, category)}
				icon={icon}
				placeholder={placeholder}
				selectedItem={values[name]}
			/>
			<Error error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default PickerWithError;
