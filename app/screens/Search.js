import React from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { Feather, Octicons ,AntDesign } from '@expo/vector-icons';
import colors from '../config/colors';
import Card from '../components/cards/Card';
import ParagraphText from '../components/texts/ParagraphText';
import SearchCard from '../components/cards/SearchCard';
import TopicText from '../components/texts/TopicText';


const Search = () => {
    return (
        <View style={styles.background}>
            <View style={styles.topic}>
                        <TopicText  children={"Search"} />
            </View>
            <AntDesign name="left" style={styles.arrowIcon} size={22} color={colors.primary} /> 
            <View style={styles.searchView}>
                <View   style={styles.inputs}>
                    <TextInput style={styles.searchInput} placeholder='Search'  />
                    <Feather name="search" size={24} color={colors.textPrimary} style={styles.searchIcon} />
                </View>
                <View style={styles.filter}>
                    <Octicons name="settings" style={styles.filterIcon} size={26} color="white" />
                </View>
                
            </View>
                <SearchCard
                price={"90000000"} 
                date={new Date().toDateString()} 
                itemName={"Range Rover Sport"} 
                sellerName={"Chamindu Jayasith"} 
                imageUrl={require("../assets/images/Range_Rover.jpg")}
                style={{width: "100%", resizeMode: 'contain', bottom:282}}
                />
                <SearchCard
                price={"50000000"} 
                date={new Date().toDateString()} 
                itemName={"Ford Mustang (2021)"} 
                sellerName={"Chamindu Jayasith"} 
                imageUrl={require("../assets/images/Ford_Mustang_2021.jpg")}
                style={{width: "100%", resizeMode: 'contain', bottom:170}}
                />

        </View>
    )
}

const styles = StyleSheet.create({
    arrowIcon:{
        position:'absolute',
        top:'-4%',
        left:'3%'
    },
    topic:{
        alignSelf:'center',
        top:-35
    },
    background:{
        marginTop:'20%'
    },
    inputs:{
        justifyContent:'center',
        color:colors.secondary,
        width:'60%',
        height:40,
        backgroundColor:colors.secondary,
        borderRadius:8,
        padding:'3%',
        paddingLeft:'10%',
        alignSelf:'center',
        marginBottom:'5%'
    },
    searchInput:{
        color:colors.textPrimary,
    },
    searchIcon:{
        position:'absolute',
        left:'3.5%',
        
    },
    filter:{
        backgroundColor:colors.primary,
        width:40,
        height:40,
        marginLeft:10,
        borderRadius:8,
        
    },
    searchView:{
        flexDirection: "row",
		justifyContent: "center",
        
    },
    filterIcon:{
        transform: [{ rotate: "90deg" }],
        left:0,
        top:14.5,
    },
    cardImage01:{
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
    image01: {
		width: "100%",
        resizeMode: 'contain',
        bottom:282
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

export default Search
