import React from 'react'
import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import PrimaryButton from '../components/buttons/PrimaryButton'
import colors from '../config/colors'
import {  AntDesign , Feather   } from '@expo/vector-icons';
import {Formik} from "formik";
import * as Yup from "yup";

const SingleItem = ({route, navigation}) => {
    const listing = route.params;


	const validation = Yup.object().shape({
		description: Yup.string().required().label("Description")
	})

	const handleSubmit = async()=>{
		
	}
    return (
        <View style={styles.background}>
            <Image source={{uri : listing.images[0].url}} style={styles.image} />
            <AntDesign name="left" style={styles.arrowIcon} size={22} color="white" onPress={()=>navigation.navigate("Search")} /> 
            <Feather name="share" style={styles.shareIcon} size={22} color="white" />
            <Text style={styles.itemName}>{listing.title}</Text>
            <View style={styles.rowView}>
            <Text style={styles.priceText}>Description  :</Text>
            <Text style={styles.itemDetail}>{listing.description}</Text>
            </View>
            <View style={styles.rowView}>
            <Text style={styles.priceText}>Price  :</Text>
            <Text style={styles.texts}>  LKR {listing.price}</Text>
            </View>
            <View style={styles.rowView}>
            <Text style={styles.priceText}>Location  :</Text>
            <Text style={styles.texts}>  Colombo</Text>
            </View>
            <View style={styles.rowView}>
            <Text style={styles.priceText}>Seller  :</Text>
            <Text style={styles.texts}>  Thushara</Text>
            </View>
            <Text style={styles.sellerText} >Contact Seller</Text>
            <Formik 
				initialValues={{description:""}} 
				onSubmit={handleSubmit}
				validationSchema={validation}>
					{({handleChange, handleSubmit, errors, setFieldTouched, touched })=>(
					<>
                        {touched.password &&<Text style={styles.error} >{errors.description}</Text>}
                        <View style={styles.messageView}>
                            <TextInput onBlur={()=>setFieldTouched("description")} onChangeText={handleChange("description")} autoCapitalize="none" style={styles.message} placeholder='Message' />
                        </View>
                        <View style={styles.signupButton} >
                            <PrimaryButton style={{top: 20,}} title={"Send"} onPress={handleSubmit} />
                        </View>
                    </>)}
			</Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    background: {
		flex: 1,
		justifyContent: "flex-end",
	},
    image:{
        width:"100%",
        height:260
    },
    itemName:{
        fontSize:25,
        fontWeight:"bold",
        color:colors.textPrimary,
        alignSelf:'center',
        marginTop:"1%",
        marginBottom:"1%"
    },
    itemDetail:{
        fontSize:15,
        color:colors.textPrimary,
        alignSelf:'flex-start',
        marginLeft:"3%"
    },
    rowView:{
        flexDirection: "row",
		justifyContent: "flex-start",
        marginLeft:"3%",
        marginTop:"1%"
    },
    priceText:{
        fontSize:15,
        fontWeight:"bold",
        color:colors.textPrimary,
    },
    texts:{
        fontSize:15,
        color:colors.textPrimary,
    },
    messageView:{
        justifyContent:'center',
        color:colors.secondary,
        width:'85%',
        height:100,
        backgroundColor:colors.secondary,
        borderRadius:8,
        padding:'3%',
        paddingLeft:'10%',
        alignSelf:'center',
        marginBottom:'0%'
    },
    message:{
        color:colors.textPrimary,
    },
    sellerText:{
        fontSize:18,
        fontWeight:"bold",
        color:colors.textPrimary,
        marginLeft:"3%",
        marginTop:"3%",
        marginBottom: "3%"
    },
    arrowIcon:{
        position:'absolute',
        top:'5%',
        left:'4%'
    },
    shareIcon:{
        position:'absolute',
        top:'4.5%',
        right:'5%'
    },
    signupButton:{
        paddingBottom: 100,
    },
    error:{
		position: "relative",
		color:'red',
		marginLeft:"12%",
		top:0
	},


})

export default SingleItem
