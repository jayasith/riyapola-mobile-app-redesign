import React from "react";
import { StyleSheet, View } from "react-native";

import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
	return (
		<View style={styles.container}>
			{imageUris.map((uri) => (
				<ImageInput
					key={uri}
					imageUri={uri}
					onChangeImage={() => onRemoveImage(uri)}
				/>
			))}
			<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginHorizontal: 25,
		marginBottom: 20,
	},
});

export default ImageInputList;
