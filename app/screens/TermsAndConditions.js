import React from "react";
import ParagraphText from "../components/texts/ParagraphText";
import TitleText from "../components/texts/TitleText";
import colors from "../config/colors";
import Buttlet from "../components/inputs/Bullet";

import {
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

const TermsAndConditions = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <TitleText style={styles.title}>Terms and Conditions</TitleText>
      <Buttlet
        title="'Buyer' means the entity to which seller is providing products or services under the contract"
        icon="dot-single"
      />
      <Buttlet
        title="'Contract' means either the contract agreement signed by both parties or the purchaseorder signed by buyer and accepted by seller in writing. for the sale of products or services"
        icon="dot-single"
      />
      <Buttlet
        title="Together with these terms and conditions seller's final quotation, the agreed scope(s) of work an seller's orders acknoledgment"
        icon="dot-single"
      />
      <Buttlet
        title="Together with these terms and conditions seller's final quotation, the agreed scope(s) of work an seller's orders acknoledgment"
        icon="dot-single"
      />
      <Buttlet
        title="Together with these terms and conditions seller's final quotation, the agreed scope(s) of work an seller's orders acknoledgment"
        icon="dot-single"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    left: 20,
  },
  line: {
    borderBottomColor: "#9fa098",
    borderBottomWidth: 0.7,
    flexDirection: "row",
    marginHorizontal: 40,

    marginTop: 13,
  },
});
export default TermsAndConditions;
