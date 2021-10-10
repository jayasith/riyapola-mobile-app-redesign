import React, { useContext, useState } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import colors from "../config/colors";
import { Ionicons, Entypo } from "@expo/vector-icons";
import auth from "../api/auth";
import {Formik} from "formik";
import * as Yup from "yup";
import Error from "../components/toasts/Error";
import userAuth from "../api/auth/userAuth";

function LoginScreen({navigation}) {

	const {logIn} = userAuth();
	const [LoginFail, setLoginFail] = useState(false)

	const validation = Yup.object().shape({
		email: Yup.string().required().email().label("Email"),
		password: Yup.string().required().min(4).label("Password")
	})

	const handleSubmit = async({email,password})=>{
		const result = await auth.login( email,password);
		if(!result.ok) return setLoginFail(true);
		setLoginFail(false);
		logIn(result.data)
	}

	return (
		<View style={styles.background}>
			<Image
				style={styles.logoImg}
				source={require("../assets/images/Login.png")}
			/>
			<View style={styles.texts}>
				<Text style={styles.loginText}>Login </Text>
				<Text style={styles.signupText} onPress={()=>navigation.navigate("SingUp")} >Signup </Text>
			</View>
			<View style={styles.circle}></View>
			<Error error="Invalid Email or Password" visible={LoginFail}></Error>
			<Formik 
				initialValues={{email:"",password:""}} 
				onSubmit={handleSubmit}
				validationSchema={validation}>
					{({handleChange, handleSubmit, errors, setFieldTouched, touched })=>(
					<>
							<View style={styles.inputs}>
					<TextInput onBlur={()=>setFieldTouched("email")} onChangeText={handleChange("email")} autoCapitalize="none" autoCorrect={false} keyboardType="email-address" style={styles.emailInput} placeholder="Email Address" />
					<Ionicons
						name="mail"
						size={24}
						color={colors.textPrimary}
						style={styles.emailIcon}
					/>
				</View>
				{touched.email && <Text style={styles.error}>{errors.email}</Text>}
				<View style={styles.inputs}>
					<TextInput onBlur={()=>setFieldTouched("password")} onChangeText={handleChange("password")} autoCapitalize="none" autoCorrect={false} secureTextEntry style={styles.passwordInput} placeholder="Password" />
					<Entypo
						name="lock"
						size={24}
						color={colors.textPrimary}
						style={styles.passwordIcon}
					/>
				</View>
				{touched.password &&<Text style={styles.error} >{errors.password}</Text>}
				<Text style={styles.forgotText} onPress={()=>navigation.navigate("ForgotPassword")} >Forgot password</Text>
				<View style={styles.signupButton} >
					<PrimaryButton  title="Login" onPress={handleSubmit} />
				</View>
					
					</>)}
			</Formik>
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
		marginBottom: 10,
		marginTop:12
	},
	signupButton: {
		paddingBottom: 100,
	},
	texts: {
		flexDirection: "row",
		marginBottom: "18%",
		justifyContent: "space-evenly",
		marginBottom:50
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
		top: -48,
		left: "28.5%",
	},
	logo: {
		position: "relative",
		top: -8,
		alignSelf: "center",
	},
	error:{
		position: "relative",
		color:'red',
		marginLeft:"12%",
		top:-10
	},
	logoImg:{
		position: "relative",
		top: -20,
		alignSelf: "center",
		width:280,
		height:280
	}
});

export default LoginScreen;
