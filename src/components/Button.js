import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import gradients from "../../constants/gradients";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ title, onPress }) => {
  return (
    <LinearGradient colors={gradients.gradientBlue} style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    elevation: 4,
    overflow: "hidden",
    maxWidth: "50%",
  },
  btn: {},
  title: {
    textAlign: "center",
    fontFamily: "montserratMedium",
    paddingVertical: 12,
    paddingHorizontal: 25,
    fontSize: 15,
    color: "white",
  },
});
