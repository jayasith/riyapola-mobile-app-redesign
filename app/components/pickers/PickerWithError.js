import React from "react";
import { View } from "react-native";
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
		<View style={{ width: "100%", paddingHorizontal: 20 }}>
			<Error error={errors[name]} visible={touched[name]} />
			<CategoryPicker
				items={items}
				onSelectItem={(item) => setFieldValue(name, item)}
				icon={icon}
				placeholder={placeholder}
				numberOfColumns={numberOfColumns}
				selectedItem={values[name]}
				PickerItemComponent={PickerItemComponent}
			/>
		</View>
	);
};

export default PickerWithError;
