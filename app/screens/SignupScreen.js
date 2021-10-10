import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import colors from "../config/colors";
import { Ionicons, Entypo } from "@expo/vector-icons";
import {Formik} from "formik";
import * as Yup from "yup";
import Error from "../components/toasts/Error";
import userAuth from "../api/auth/userAuth";
import auth from "../api/auth";

const SignupScreen = ({navigation}) => {

	const {logIn} = userAuth();
	const [error, setError] = useState("")
	const [signUpFail, setSignUpFail] = useState(false)

	const validation = Yup.object().shape({
		name: Yup.string().required().label("Name"),
		email: Yup.string().required().email().label("Email"),
		password: Yup.string().required().min(4).label("Password")
	})

	const handleSubmit = async(userInfo)=>{
		const result = await auth.register(userInfo);

		if(!result.ok){
			setSignUpFail(true)
			if(result.data){ 
				setError(result.data.error)
			}else{
				setError("An unexpected error occurred")
			}
			return;
		}
		const {data:authToken} = await auth.login(
			userInfo.email,
			userInfo.password,
		)
		logIn(authToken)
	}

	return (
		<View style={styles.background}>
			{/* <Image
				style={styles.logo}
				source={require("../assets/images/logo.png")}
			/> */}
			<Image
				style={styles.signup}
				source={require("../assets/images/Signup.png")}
			/>
			<View style={styles.texts}>
				<Text style={styles.loginText} onPress={()=>navigation.navigate("Login")} >Login </Text>
				<Text style={styles.signupText}>Signup </Text>
			</View>
			<View style={styles.circle}></View>
			<Error error={error} visible={signUpFail}></Error>
			<Formik 
				initialValues={{name:"",email:"",password:""}} 
				onSubmit={handleSubmit}
				validationSchema={validation}>
					{({handleChange, handleSubmit, errors, setFieldTouched, touched })=>(
					<>
						<View style={styles.inputs}>
							<TextInput onBlur={()=>setFieldTouched("name")} onChangeText={handleChange("name")} style={styles.passwordInput} placeholder="Name" />
							<Ionicons
								name="person"
								size={24}
								color={colors.textPrimary}
								style={styles.nameIcon}
							/>
						</View>
						{touched.name &&<Text style={styles.error} >{errors.name}</Text>}
						<View style={styles.inputs}>
							<TextInput onBlur={()=>setFieldTouched("email")} onChangeText={handleChange("email")} style={styles.emailInput} placeholder="Email Address" />
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
						<View style={styles.signupButton}>
							<PrimaryButton title="Signup" onPress={handleSubmit} />
						</View>
					</>)}
			</Formik>
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
		top: -68,
		left: "67%",
	},
	logo: {
		position: "relative",
		top: "-20%",
		alignSelf: "center",
	},
	error:{
		position: "relative",
		color:'red',
		marginLeft:"12%",
		top:-10
	},
	signup:{
		position: "relative",
		alignSelf: "center",
		width:330,
		height:330
	}
});

export default SignupScreen;
