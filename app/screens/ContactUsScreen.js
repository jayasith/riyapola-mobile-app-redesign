import React from "react";
import ParagraphText from "../components/texts/ParagraphText";
import TitleText from "../components/texts/TitleText";
import TopicText from "../components/texts/TopicText";
import TextInputWithIcon from "../components/inputs/TextInputWithIcon";
import SubmitButton from "../components/buttons/SubmitButton";
import Form from "../components/forms/Form";
import colors from "../config/colors";
import {
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

const ContactUsScreen = () => {
  return (
    <Form>
      {/* <SuccessScreen progress={progress} visible={successVisible} /> */}
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

      <TitleText style={styles.title}>Contact Us</TitleText>

      <View style={{ paddingLeft: 25, paddingVertical: 30, paddingBottom: 10 }}>
        <TopicText>Email: riyapola@gmail.com</TopicText>
        <TopicText>Phone: 0778937485</TopicText>
      </View>
      <View style={{ paddingLeft: 25, paddingVertical: 30, paddingBottom: 10 }}>
        <ParagraphText>Feel free to reach out</ParagraphText>
      </View>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInputWithIcon
            placeholder="Type Here .. "
            multiline
            numberOfLines={5}
          />
          <SubmitButton
            title="Save"
            style={{ width: "90%", top: 10, marginBottom: 20 }}
          />
        </ScrollView>
      </View>
    </Form>
  );
};
const styles = StyleSheet.create({
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    left: 150,
  },
  title1: {
    paddingTop: 30,
    paddingBottom: 20,
    left: 250,
  },
  line: {
    borderBottomColor: "#9fa098",
    borderBottomWidth: 0.7,
    flexDirection: "row",
    marginHorizontal: 40,

    marginTop: 13,
  },
});
export default ContactUsScreen;
