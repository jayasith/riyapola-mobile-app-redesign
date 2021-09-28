import React from "react";
import { View, StatusBar, StyleSheet , ScrollView} from "react-native";
import TitleText from "../components/texts/TitleText";
import SubtitleText from "../components/texts/SubtitleText";
import ParagraphText from "../components/texts/ParagraphText";
import SubTopic from "../components/texts/SubTopic";
import colors from "../config/colors";
import { Ionicons, Entypo} from "@expo/vector-icons";
import TextWithButton from "../components/inputs/TextwithButton";
const NotificationScreen = () => {
  return (
    		<ScrollView>
    <View>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <TitleText style={styles.title}>Notification</TitleText>

      <SubTopic style={styles.text}>text</SubTopic>
      <SubTopic style={styles.text}>text</SubTopic>
      <SubTopic style={styles.text}>text</SubTopic>
      <SubTopic style={styles.text}>text</SubTopic>
      <SubTopic style={styles.text}>text</SubTopic>
      <TextWithButton title="Settings" icon="cog" />
    </View>
    </ScrollView>
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
