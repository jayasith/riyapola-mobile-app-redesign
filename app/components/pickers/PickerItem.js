import React from "react";
import { TouchableOpacity } from "react-native";
import ParagraphText from "../texts/ParagraphText";

const PickerItem = ({ item, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<ParagraphText style={{ padding: 30 }}>{item.label}</ParagraphText>
		</TouchableOpacity>
	);
};

export default PickerItem;
