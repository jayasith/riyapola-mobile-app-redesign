import React from 'react'
import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import PrimaryButton from '../components/buttons/PrimaryButton'
import colors from '../config/colors'
import {  AntDesign , Feather   } from '@expo/vector-icons';


const SingleItem = ({route, navigation}) => {
    const listing = route.params;
    return (
        <View>
            <Image source={{uri : listing.images[0].url}} style={styles.image} />
            <AntDesign name="left" style={styles.arrowIcon} size={22} color="white" onPress={()=>navigation.navigate("Search")} /> 
            <Feather name="share" style={styles.shareIcon} size={22} color="white" />
            <Text style={styles.itemName}>{listing.title}</Text>
            <Text style={styles.itemDetail}>Style Name PHEV Autobiography</Text>
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
            <View style={styles.messageView}>
                <TextInput style={styles.message} placeholder='Message' />
            </View>
            <PrimaryButton style={{top: 10,}} title={"Send"} />
        </View>
    )
}

const styles = StyleSheet.create({
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
        marginTop:"1%",
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
    }


})

export default SingleItem
