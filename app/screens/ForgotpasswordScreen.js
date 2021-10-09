import React from 'react'
import { View,Text, StyleSheet, TextInput, } from 'react-native'
import { Ionicons, AntDesign   } from '@expo/vector-icons';
import colors from '../config/colors';
import TopicText from '../components/texts/TopicText';
import PrimaryButton from '../components/buttons/PrimaryButton';

const ForgotpasswordScreen = ({navigation}) => {
    return (
        <View style={styles.background}>
            <AntDesign name="left" style={styles.arrowIcon} size={22} color={colors.primary} /> 
            <View style={styles.topic}>
            <TopicText  children={"Forgot Password"} />
            </View>
            <Text style={styles.textEmail}>Enter your email address</Text>
            <View   style={styles.inputs}>
                <TextInput style={styles.emailInput} placeholder='Email Address'  />
                <Ionicons name="mail" size={24} color={colors.textPrimary} style={styles.emailIcon} />
            </View>
            <PrimaryButton title={"Send"} onPress={()=>navigation.navigate("Login")} />
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
        marginBottom:'5%'
    },
    emailInput:{
        color:colors.textPrimary,
    },
    emailIcon:{
        position:'absolute',
        left:'3.5%',

    },
    background:{
        marginTop:'9%'
    },
    topic:{
        alignSelf:'center'
    },
    textEmail:{
        fontSize:15,
        color:colors.textPrimary,
        fontWeight:'600',
        marginLeft:'4%',
        marginBottom:'5%',
        marginTop:'3%'
    },
    arrowIcon:{
        position:'absolute',
        top:'4%',
        left:'3%'
    }
})

export default ForgotpasswordScreen
