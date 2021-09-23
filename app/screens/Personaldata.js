import React, { useState } from "react";
import { View, StatusBar,Text, StyleSheet, TextInput } from "react-native";
import TitleText from "../components/texts/TitleText";
import PrimaryButton from "../components/buttons/PrimaryButton";

const PersonalData = () => {
	
	return (
        <View>
            <TitleText style={styles.title}>Personal data</TitleText>
            <Text>Your Name :</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Birth date :</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Gender</Text>
            <Text>Your Job :</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Your Location :</Text>
            <TextInput style={styles.input}></TextInput>
			<PrimaryButton title="Save" style={{ width: "90%", top: 20 }} />
		</View>
	);
};


const styles = StyleSheet.create({
	title: {
		paddingTop: 30,
		paddingBottom: 20,
		left: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        margin: 10,
        width: 200
        
        
    }
});


export  default PersonalData;