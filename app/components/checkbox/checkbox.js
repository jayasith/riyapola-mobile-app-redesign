import React from 'react'
import { View, Text } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from '../../config/colors';

const checkbox = ({name}) => {

     const[select,setSelect] = useState(null);
    return (

             <BouncyCheckbox
                            size={20}
                            fillColor={colors.primary}
                            unfillColor="#FFFFFF"
                            text={name}
                            iconStyle={{ borderColor: colors.primary }}
                            textStyle={{textDecorationLine: "none",
                            color:colors.textPrimary,
                            fontSize:12, marginLeft:-10}}
                            onPress={() => {setSelect(true)}}
                            />
    )
}

export default checkbox
