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
      

      <TextWithIcon title="Notification" icon="notification" />
      <TextWithIcon title="Dark Theme" icon="moon" />
      <View style={styles.line} />
      <TextWithButton title="Change Email" icon="email" />
      <TextWithButton title="Change Password" icon="change" />
      <TextWithButton title="Help" icon="help" />
      <View style={styles.line} />
     
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
     paddingTop: 30,
    paddingBottom: 20,
    left: 150,
  },
  line: {
		borderBottomColor: "#9fa098",
		borderBottomWidth: 0.7,
		flexDirection: "row",
		marginHorizontal: 40,

		marginTop: 13,
	},
});

export default SettingsScreen;
