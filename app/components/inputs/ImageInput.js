import React, { useEffect } from "react";
import {
	StyleSheet,
	View,
	Image,
	TouchableWithoutFeedback,
	Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../../config/colors";

const ImageInput = ({ imageURI, onChangeImage }) => {
	const requestPermission = async () => {
		try {
			const { granted } = await ImagePicker.requestCameraPermissionsAsync();

			if (!granted) {
				alert("You need to enable permissions to access the library.");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handlePress = () => {
		if (!imageURI) selectImage();
		else
			Alert.alert("Delete", "Are you sure you want to delete this image?", [
				{ text: "Yes", onPress: () => onChangeImage(null) },
				{ text: "No" },
			]);
	};

	useEffect(() => {
		requestPermission();
	}, []);

	const selectImage = async () => {
		try {
			const res = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});

			if (!res.cancelled) {
				onChangeImage(res.uri);
			}
		} catch (err) {
			console.log("Error when reading an image");
		}
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageURI ? (
					<MaterialCommunityIcons
						color={colors.textPrimary}
						name="camera"
						size={25}
					/>
				) : (
					<Image source={{ uri: imageURI }} style={styles.image} />
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.secondary,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
		height: 100,
		width: 100,
		padding: 20,
		overflow: "hidden",
	},
	image: {
		width: 100,
		height: 100,
	},
});

export default ImageInput;
