import React from "react";
import { View, StatusBar, StyleSheet , ScrollView, Text} from "react-native";
import TitleText from "../components/texts/TitleText";
import SubtitleText from "../components/texts/SubtitleText";
import ParagraphText from "../components/texts/ParagraphText";
import SubTopic from "../components/texts/SubTopic";
import colors from "../config/colors";
import { Ionicons, Entypo} from "@expo/vector-icons";
import NotificationCard from "../components/cards/NotificationCard";
import TextWithButton from "../components/inputs/TextwithButton";
const NotificationScreen = () => {
  return (
    		<ScrollView>
    <View>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <TitleText style={styles.title}>Notification</TitleText>


       <NotificationCard title=" Successfully change the password" time="1 min ago"/>
           <NotificationCard title=" Successfully change the email" time="1 min ago"/>
    </View>
    <ParagraphText style={{ color: colors.primary, left:350 }}>
						clear
					</ParagraphText>

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
