import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import colors from "../config/colors";
import { Ionicons, Entypo } from "@expo/vector-icons";

const SignupScreen = ({navigation}) => {
	return (
		<View style={styles.background}>
			<Image
				style={styles.logo}
				source={require("../assets/images/logo.png")}
			/>
			<View style={styles.texts}>
				<Text style={styles.loginText} onPress={()=>navigation.navigate("Login")} >Login </Text>
				<Text style={styles.signupText}>Signup </Text>
			</View>
			<View style={styles.circle}></View>
			<View style={styles.inputs}>
				<TextInput style={styles.passwordInput} placeholder="Name" />
				<Ionicons
					name="person"
					size={24}
					color={colors.textPrimary}
					style={styles.nameIcon}
				/>
			</View>
			<View style={styles.inputs}>
				<TextInput style={styles.emailInput} placeholder="Email Address" />
				<Ionicons
					name="mail"
					size={24}
					color={colors.textPrimary}
					style={styles.emailIcon}
				/>
			</View>
			<View style={styles.inputs}>
				<TextInput autoCapitalize="none" autoCorrect={false} secureTextEntry style={styles.passwordInput} placeholder="Password" />
				<Entypo
					name="lock"
					size={24}
					color={colors.textPrimary}
					style={styles.passwordIcon}
				/>
			</View>
			<View style={styles.signupButton}>
				<PrimaryButton title="Signup" onPress={()=>navigation.navigate("Login")} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
	},
	inputs: {
		justifyContent: "center",
		color: colors.secondary,
		width: "80%",
		height: 40,
		backgroundColor: colors.secondary,
		borderRadius: 8,
		padding: "3%",
		paddingLeft: "10%",
		alignSelf: "center",
		marginBottom: "5%",
	},
	signupButton: {
		paddingBottom: 100,
	},
	texts: {
		flexDirection: "row",
		marginBottom: "18%",
		justifyContent: "space-evenly",
	},
	loginText: {
		color: "#5F7280",
		fontSize: 25,
		fontWeight: "bold",
	},
	signupText: {
		color: colors.textPrimary,
		fontSize: 25,
		fontWeight: "bold",
	},
	emailInput: {
		color: colors.textPrimary,
	},
	passwordInput: {
		color: colors.textPrimary,
	},
	emailIcon: {
		position: "absolute",
		left: "3.5%",
	},
	passwordIcon: {
		position: "absolute",
		left: "3.5%",
	},
	nameIcon: {
		position: "absolute",
		left: "3.5%",
	},
	circle: {
		position: "relative",
		backgroundColor: colors.primary,
		width: 10,
		height: 10,
		borderRadius: 5,
		top: "-8%",
		left: "67%",
	},
	logo: {
		position: "relative",
		top: "-20%",
		alignSelf: "center",
	},
});

export default SignupScreen;
