import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import colors from "../config/colors";
import { Ionicons, Entypo } from "@expo/vector-icons";

function LoginScreen({navigation}) {
	return (
		<View style={styles.background}>
			<Image
				style={styles.logo}
				source={require("../assets/images/logo.png")}
			/>
			<View style={styles.texts}>
				<Text style={styles.loginText}>Login </Text>
				<Text style={styles.signupText} onPress={()=>navigation.navigate("SingUp")} >Signup </Text>
			</View>
			<View style={styles.circle}></View>
			<View style={styles.inputs}>
				<TextInput autoCapitalize="none" autoCorrect={false} keyboardType="email-address" style={styles.emailInput} placeholder="Email Address" />
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
			<Text style={styles.forgotText} onPress={()=>navigation.navigate("ForgotPassword")} >Forgot password</Text>
			<View style={styles.signupButton}>
				<PrimaryButton title="Login" onPress={()=>navigation.navigate("Home")} />
			</View>
		</View>
	);
}

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
		color: colors.textPrimary,
		fontSize: 25,
		fontWeight: "bold",
	},
	signupText: {
		color: "#5F7280",
		fontSize: 25,
		fontWeight: "bold",
	},
	forgotText: {
		color: colors.textPrimary,
		fontSize: 15,
		fontWeight: "bold",
		marginLeft: "60%",
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
	circle: {
		position: "relative",
		backgroundColor: colors.primary,
		width: 10,
		height: 10,
		borderRadius: 5,
		top: "-8%",
		left: "28.5%",
	},
	logo: {
		position: "relative",
		top: "-20%",
		alignSelf: "center",
	},
});

export default LoginScreen;
