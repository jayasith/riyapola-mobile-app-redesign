import React from "react";
import { TouchableOpacity } from "react-native";
import ParagraphText from "../texts/ParagraphText";

const PickerItem = ({ label, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<ParagraphText style={{ padding: 30 }}>{label}</ParagraphText>
		</TouchableOpacity>
	);
};

export default PickerItem;
