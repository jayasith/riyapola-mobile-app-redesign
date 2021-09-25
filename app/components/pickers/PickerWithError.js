import React from "react";
import { useFormikContext } from "formik";

import CategoryPicker from "./ItemPicker";
import Error from "../toasts/Error";

const PickerWithError = ({
	icon,
	name,
	PickerItemComponent,
	items,
	placeholder,
	numberOfColumns,
}) => {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	return (
		<>
			<CategoryPicker
				items={items}
				onSelectItem={(item) => setFieldValue(name, item)}
				icon={icon}
				placeholder={placeholder}
				numberOfColumns={numberOfColumns}
				selectedItem={values[name]}
				PickerItemComponent={PickerItemComponent}
			/>
			<Error error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default PickerWithError;
