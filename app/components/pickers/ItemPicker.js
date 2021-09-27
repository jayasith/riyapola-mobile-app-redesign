import React, { useState } from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ParagraphText from "../texts/ParagraphText";

import colors from "../../config/colors";
import PickerItem from "./PickerItem";

const CategoryPicker = ({
	icon,
	placeholder,
	selectedItem,
	onSelectItem,
	items,
	numberOfColumns = 1,
	PickerItemComponent = PickerItem,
}) => {
	const [show, setShow] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setShow(true)}>
				<View style={styles.container}>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						{icon && (
							<MaterialIcons name={icon} size={25} style={styles.icon} />
						)}
						{!selectedItem ? (
							<ParagraphText style={{ fontSize: 18 }}>
								{placeholder}
							</ParagraphText>
						) : (
							<ParagraphText
								style={{ fontSize: 18, color: colors.textPrimary }}
							>
								{selectedItem.label}
							</ParagraphText>
						)}
					</View>
					<MaterialIcons
						name="keyboard-arrow-down"
						size={25}
						style={styles.icon}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={show} animationType="slide">
				<Button
					title="Close"
					onPress={() => setShow(false)}
					style={{ paddingTop: 50 }}
				/>
				<FlatList
					data={items}
					numColumns={numberOfColumns}
					keyExtractor={(item) => item.value.toString()}
					renderItem={({ item }) => (
						<PickerItemComponent
							item={item}
							onPress={() => {
								setShow(false);
								onSelectItem(item);
							}}
						/>
					)}
				/>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.secondary,
		flexDirection: "row",
		marginHorizontal: 5,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 20,
		justifyContent: "space-between",
	},

	icon: {
		color: colors.textPrimary,
		marginRight: 10,
	},

	text: {
		fontFamily: "poppins-medium",
		fontSize: 18,
		color: colors.textPrimary,
		width: "100%",
		marginRight: 20,
		flex: 1,
	},
});

export default CategoryPicker;
