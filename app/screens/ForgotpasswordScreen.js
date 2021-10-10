import React, { useState } from 'react'
import { View,Text, StyleSheet, TextInput, Image } from 'react-native'
import { Ionicons, AntDesign   } from '@expo/vector-icons';
import colors from '../config/colors';
import TopicText from '../components/texts/TopicText';
import PrimaryButton from '../components/buttons/PrimaryButton';
import {Formik} from "formik";
import * as Yup from "yup";

const ForgotpasswordScreen = ({navigation}) => {

    const {logIn} = userAuth();
	const [LoginFail, setLoginFail] = useState(false)

    const handleSubmit = async()=>{
		
	}
	const validation = Yup.object().shape({
		email: Yup.string().required().email().label("Email"),
	})

    return (
        <View style={styles.background} >
            <AntDesign name="left" onPress={()=>navigation.navigate("Login")} style={styles.arrowIcon} size={22} color={colors.primary} /> 
            <View style={styles.topic}>
            <TopicText  children={"Forgot Password"} />
            </View>
            <Image
				style={styles.Img}
				source={require("../assets/images/Forgot_password.png")}
			/>
            <Text style={styles.textEmail}>Enter your email address</Text>
            <Formik 
				initialValues={{email:""}} 
				onSubmit={handleSubmit}
				validationSchema={validation}>
					{({handleChange, handleSubmit, errors, setFieldTouched, touched })=>(
					<>
            <View   style={styles.inputs}>
                <TextInput onBlur={()=>setFieldTouched("email")} onChangeText={handleChange("email")} style={styles.emailInput} placeholder='Email Address'  />
                <Ionicons name="mail" size={24} color={colors.textPrimary} style={styles.emailIcon} />
            </View>
            {touched.email && <Text style={styles.error}>{errors.email}</Text>}
            <PrimaryButton title={"Send"} style={{top:10}} onPress={handleSubmit} />
            </>)}
			</Formik>
        </View>
    )
}

const styles = StyleSheet.create({
     inputs:{
        justifyContent:'center',
        color:colors.secondary,
        width:'80%',
        height:40,
        backgroundColor:colors.secondary,
        borderRadius:8,
        padding:'3%',
        paddingLeft:'10%',
        alignSelf:'center',
        marginBottom:20
    },
    emailInput:{
        color:colors.textPrimary,
    },
    emailIcon:{
        position:'absolute',
        left:'3.5%',

    },
    background:{
        marginTop:'9%',
        flex: 1,
    },
    topic:{
        alignSelf:'center',
        top:-23
    },
    textEmail:{
        fontSize:15,
        color:colors.textPrimary,
        fontWeight:'600',
        marginLeft:'10%',
        marginBottom:'5%',
        marginTop:'3%'
    },
    arrowIcon:{
        position:'absolute',
        top:-15,
        left:'3%'
    },
    Img:{
        position: "relative",
		top: -20,
		alignSelf: "center",
		width:300,
		height:300
    },
    error:{
        position: "relative",
		color:'red',
		marginLeft:"12%",
		top:-10
    }
})

export default ForgotpasswordScreen
