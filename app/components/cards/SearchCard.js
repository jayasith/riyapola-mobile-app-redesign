import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import colors from '../../config/colors'


const SearchCard = ({price, date, itemName, sellerName, imageUrl, style}) => {
    return (
        <View style={styles.cardView}>
                    
                    
                    <View style={styles.cardImage}>
                        <Image style={[styles.image, style]} source={imageUrl} />
                    </View>
                    <View style={styles.priceView}>
					    <Text style={styles.priceText}>Rs. {price}</Text>
				    </View>
                    <Text style={styles.nameText}>{itemName}</Text>
                    <Text style={styles.dateText}>{date}</Text>
                    <Text style={styles.sellerText}>{sellerName}</Text>
                </View>
    )
}

const styles = StyleSheet.create({

      cardImage:{
        width:"100%",
        
    },
    cardView:{
        width:"80%",
        height:220,
        overflow: "hidden",
        alignSelf:'center',
        backgroundColor:colors.secondary,
        borderRadius:8,
        marginTop:"5%"
    },
    image: {
		width: "100%",
        resizeMode: 'contain',
        bottom:170
	},
    priceView:{
        position: "absolute",
		elevation: 1,
		backgroundColor: "rgba(255,255,255, 0.6)	",
		top: "4%",
		left: "5%",
		paddingVertical: 2,
		paddingHorizontal: 8,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
    },
    priceText:{
        fontFamily: "poppins-medium",
		fontSize: 11,
		fontWeight: "500",
		color:"#304756",
    },
    nameText:{
        position:'absolute',
        color:colors.textPrimary,
        fontSize: 14,
		fontWeight: "500",
        fontWeight: 'bold',
        left:"5%",
        top:"75%"
    },
    dateText:{
        position:'absolute',
        color:colors.textPrimary,
        fontSize: 10,
		fontWeight: 'bold',
        left:"5%",
        top:"85%"
    },
    sellerText:{
        position:'absolute',
        color:colors.textPrimary,
        fontSize: 10,
		fontWeight: 'bold',
        right:"5%",
        top:"80%"
    }
})


export default SearchCard
