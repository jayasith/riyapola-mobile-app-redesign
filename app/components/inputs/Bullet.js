import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../../config/colors";
export const Bullet = ({ icon, style, title }) => {
  return (
    <View style={[styles.container, style]}>
      <Entypo name={icon} size={24} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 25,
    paddingVertical: 1,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 80,
  },

  icon: {
    color: colors.textPrimary,
    marginRight: 5,
  },

  text: {
    fontFamily: "poppins-medium",
    fontSize: 18,
    color: colors.textPrimary,
    width: "100%",
    marginRight: 20,
  },
});

export default Bullet;
