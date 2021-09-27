import  React, { useState} from 'react'
import { StyleSheet, Text, TextInput, View, chek  } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';
import TopicText from '../components/texts/TopicText';
import TitleText from '../components/texts/TitleText';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Checkbox from '../components/checkbox/checkbox';

const SearchFilter = () => {

    var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 },
  {label: 'param3', value: 2 },
  {label: 'param4', value: 3 }
];

  const [current, setCurrent] = useState(0);
 

        return (
            <View style={styles.background}>
                <AntDesign name="close" style={styles.closeIcon} size={22} color={colors.primary}/>
                <View style={styles.Topic}>
                    <TopicText children={"Filter"}  />
                </View>
                <View style={styles.resetTextView}>
                <Text style={styles.resetText}>Reset</Text>
                </View>
                <Text style={styles.sortText}>Sort</Text>
                <View style={styles.redio}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {setCurrent(value)}}
                    formHorizontal={true}
                    buttonColor={'black'}
                    //  buttonInnerColor={'#e74c3c'}
                    //  buttonOuterColor={'#2C55EE'}
                    buttonSize={10}
                    buttonStyle={{}}
                    
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
                            <Checkbox name="West" />
                            <Checkbox name="East" />
                        </View>
                        <View>
                            <Checkbox name="North" />
                            <Checkbox name="South" />
                        </View>
                    </View>
                    <Text style={styles.priceText}>Category</Text>
                    <PrimaryButton title={"Result"} />
            </View>
        )
    }


const styles = StyleSheet.create({
    background:{
        marginTop:'9%'
    },
    closeIcon:{
        position:'absolute',
        top:'12%',
        left:'5%'
    },
    Topic:{
        alignSelf:'center'
    },
    resetTextView:{
        position:'absolute',
        top:'20%',
        right:'8%',
        
    },
    resetText:{
        color:colors.primary,
    },
    sortText:{
        color:colors.textPrimary,
        fontSize: 20,
        marginLeft:'5%',
        marginTop:'5%',
    },
    priceText:{
        color:colors.textPrimary,
        fontSize: 20,
        marginLeft:'5%',
        marginTop:'5%'
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
        marginTop:'3%'
    },
    redio:{
        width:50
    },
    locationRaw:{
        
    }

})


export default SearchFilter


