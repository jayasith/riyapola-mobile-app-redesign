import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import TitleText from "../components/texts/TitleText";
import SubtitleText from "../components/texts/SubtitleText";
import ParagraphText from "../components/texts/ParagraphText";
import SubTopic from "../components/texts/SubTopic";
import colors from "../config/colors";
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
const NotificationScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <TitleText style={styles.title}>Notification</TitleText>
  
      <SubTopic style={styles.text}>text</SubTopic>      
      <SubTopic style={styles.text}>text</SubTopic>
     <SubTopic style={styles.text}>text</SubTopic>
    <SubTopic style={styles.text}>text</SubTopic>
     <SubTopic style={styles.text}>text</SubTopic>

    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    left: 150,
  },
});
export default NotificationScreen;
