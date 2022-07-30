import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import gradients from "../../constants/gradients";

const List = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <LinearGradient
          colors={gradients.gradientLight}
          style={styles.gradient}
        >
          <Text style={styles.nameText}>{item.name}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 5,
    overflow: "hidden",
    elevation: 6,
  },
  gradient: {
    padding: 15,
  },
  nameText: {
    color: colors.primary,
    fontFamily: "montserratMedium",
    fontSize: 12,
    paddingLeft: 10,
  },
});
