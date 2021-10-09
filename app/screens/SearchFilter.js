import  React, { useState} from 'react'
import { StyleSheet, Text, TextInput, View,  } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';
import TopicText from '../components/texts/TopicText';
import TitleText from '../components/texts/TitleText';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Checkbox from '../components/checkbox/checkbox';
import RadioGroup from "react-native-radio-buttons-group";
import SubtitleText from '../components/texts/SubtitleText';



const SearchFilter = ({navigation}) => {

const radioButtonsData = [
	{
		id: "1", // acts as primary key, should be unique and non-empty string
		label: "Lowest price first",
		value: "Lowest",
		color: "#1652DA",
	},
	{
		id: "2",
		label: "Highest price first",
		value: "Highest",
		color: "#1652DA",
	},
];

const [current, setCurrent] = useState(0);

const [radioButtons, setRadioButtons] = useState(radioButtonsData);

function onPressRadioButton(radioButtonsArray) {
		setRadioButtons(radioButtonsArray);
	}

        return (
            <View style={styles.background}>
                <AntDesign name="close" style={styles.closeIcon} size={22} color={colors.primary} onPress={()=>navigation.navigate("Search")}/>
                <View style={styles.Topic}>
                    <SubtitleText children={"Filter"} />
                </View>
                <View style={styles.resetTextView}>
                <Text style={styles.resetText}>Reset</Text>
                </View>
                <Text style={styles.sortText}>Sort</Text>
                <View style={styles.radio}>
                    <RadioGroup
				radioButtons={radioButtons}
				onPress={onPressRadioButton}
				layout="row"
				colorScheme="green"
			/>
                    </View>
                    <Text style={styles.priceText}>Price</Text>
                    <View style={styles.input}>
                    <View   style={styles.inputs}>
                        <TextInput style={styles.min} placeholder='Min.' />
                    </View>
                    <TopicText children={"-"}  />
                    <View style={styles.inputs}>
                        <TextInput style={styles.min} placeholder='Max.' />
                    </View>
                    </View>
                    <Text style={styles.priceText}>Location</Text>
                    <View style={styles.locationRaw}>
                        <View>
                            <View style={styles.raw}>
                                <Checkbox name="West       " />
                            </View>
                            <View style={styles.raw}>
                                <Checkbox name="East       " />
                            </View>
                        </View>
                        <View>
                            <View style={styles.raw}>
                                <Checkbox name="North       " style={styles.raw}/>
                            </View>
                            <View style={styles.raw}>
                                <Checkbox name="South       " style={styles.raw}/>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.priceText}>Category</Text>
                    <View style={styles.locationRaw}>
                        <View>
                            <View style={styles.raw}>
                                <Checkbox name="Vehicle" />
                            </View>
                            <View style={styles.raw}>
                                <Checkbox name="Electronic" />
                            </View>
                            <View style={styles.raw}>
                                <Checkbox name="Property" />
                            </View>
                        </View>
                        <View>
                            <View style={styles.raw}>
                                <Checkbox name="Education" style={styles.raw}/>
                            </View>
                            <View style={styles.raw}>
                                <Checkbox name="Furniture" style={styles.raw}/>
                            </View>
                            <View style={styles.raw}>
                                <Checkbox name="Sports" style={styles.raw}/>
                            </View>
                        </View>
                    </View>
                    <PrimaryButton title={"Result"} />
            </View>
        )
    }


const styles = StyleSheet.create({
    background:{
        marginTop:'9%'
    },
    filterText:{
        fontSize:28,
        fontWeight:'bold',
        color:colors.textPrimary
    },
    closeIcon:{
        position:'absolute',
        top:'-3%',
        left:'5%'
    },
    Topic:{
        alignSelf:'center',
        top:"-5%"
    },
    resetTextView:{
        position:'absolute',
        top:'-3%',
        right:'8.5%',
        
    },
    resetText:{
        color:colors.primary,
        fontSize:17
    },
    sortText:{
        color:colors.textPrimary,
        fontSize: 20,
        marginLeft:'5%',
        marginTop:'-2%',
        fontWeight:'bold'
    },
    priceText:{
        color:colors.textPrimary,
        fontSize: 20,
        marginLeft:'5%',
        marginTop:'5%',
        fontWeight:'bold'
    },
    inputs:{
        justifyContent:'center',
        color:colors.secondary,
        width:'30%',
        height:40,
        backgroundColor:colors.secondary,
        borderRadius:8,
        padding:'3%',
        paddingLeft:'5%',
        alignSelf:'center',
        marginBottom:'5%'
    },
    min:{
        color:colors.textPrimary,
    },
    input:{
        flexDirection: "row",
		justifyContent: "space-evenly",
        marginTop:'3%',
        marginHorizontal:"2%"
    },
    radio:{
        width: "100%",
		marginLeft: "10%",
		color: colors.primary,
        marginTop: "2%"
    },
    locationRaw:{

        flexDirection: "row",
		justifyContent: "space-around",
        
    },
    raw:{
        marginTop:10
    }

})


export default SearchFilter


