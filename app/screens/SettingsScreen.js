import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import TitleText from "../components/texts/TitleText";
import SubtitleText from "../components/texts/SubtitleText";
import ParagraphText from "../components/texts/ParagraphText";
import SubTopic from "../components/texts/SubTopic";
import colors from "../config/colors";
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
const SettingsScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <TitleText style={styles.title}>Settings</TitleText>
      <Ionicons name="ios-notifications" size={24} color={colors.textPrimary} />
      <SubTopic style={styles.text}>Notification</SubTopic>
      <Entypo name="moon" size={24} color={colors.textPrimary} />
      <SubTopic style={styles.text}>Dark Theme</SubTopic>
            <SubTopic style={styles.text}>Change Email</SubTopic>
                  <SubTopic style={styles.text}>Change Password</SubTopic>
                        <SubTopic style={styles.text}>Help</SubTopic>
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
export default SettingsScreen;
