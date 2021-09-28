import React from "react";
import { View, StatusBar, StyleSheet ,TextInput,} from "react-native";
import TitleText from "../components/texts/TitleText";
import SubtitleText from "../components/texts/SubtitleText";
import ParagraphText from "../components/texts/ParagraphText";
import SubTopic from "../components/texts/SubTopic";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import TextWithIcon from "../components/inputs/TextWithIcon";
const SettingsScreen = ({ icon }) => {
  return (
    <View>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <TitleText style={styles.title}>Settings</TitleText>
      <Ionicons name="ios-notifications" size={24} color={colors.textPrimary} />
      <SubTopic style={styles.text}>Notification</SubTopic>
      <Entypo name="moon" size={24} color={colors.textPrimary} />

      <TextWithIcon placeholder="Title " icon="moon" />

      <SubTopic style={styles.text}>Dark Theme</SubTopic>
      <SubTopic style={styles.text}>Change Email</SubTopic>
      <SubTopic style={styles.text}>Change Password</SubTopic>
      <SubTopic style={styles.text}>Help</SubTopic>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    paddingTop: 100,
    paddingBottom: 20,
    left: 150,
  },
  icon: {
    color: colors.textPrimary,
    marginRight: 10,
  },
});
export default SettingsScreen;
