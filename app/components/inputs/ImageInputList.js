import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
	const scrollView = useRef();

	return (
		<View style={{ marginBottom: 20 }}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.scrollView}
				ref={scrollView}
				onContentSizeChange={() => scrollView.current.scrollToEnd()}
			>
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
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginHorizontal: 25,
	},
	scrollView: {
		height: 100,
	},
});

export default ImageInputList;
