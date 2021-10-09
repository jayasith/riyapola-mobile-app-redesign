import React from "react";
import { View, StatusBar, StyleSheet, TextInput } from "react-native";
import TitleText from "../components/texts/TitleText";
import SubtitleText from "../components/texts/SubtitleText";
import ParagraphText from "../components/texts/ParagraphText";
import SubTopic from "../components/texts/SubTopic";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const HelpScreen = ({ navigation }) => {
  return (
    <View>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <TitleText style={styles.title}>Help</TitleText>

      <TextWithButton
        title="Contact Us"
        icon="email"
        OnPress={() => navigation.navigate("Contact Us")}
      />
      <TextWithButton
        title="Terms and Condition"
        icon="change"
        OnPress={() => navigation.navigate("Terms And Conditions")}
      />

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

export default HelpScreen;
