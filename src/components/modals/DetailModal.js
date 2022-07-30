import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Button from "../Button";
import colors from "../../../constants/colors";

const DetailModal = ({ visible, onCancel, data }) => {
  return (
    <View>
      <Modal visible={visible} animationType="slide">
        <View style={styles.container}>
          <View>
            <Text style={styles.country}>{data?.name}</Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.date}>{data?.day}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.iconAndLabelContainer}>
              <Ionicons
                name="people"
                size={20}
                color="black"
                style={{ paddingRight: 10 }}
              />
              <Text style={styles.label}>Population</Text>
            </View>
            <Text style={styles.dataText}>{data?.population}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.iconAndLabelContainer}>
              <Text style={styles.label}>New Case</Text>
            </View>
            <Text style={styles.dataText}>{data?.newCase}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.iconAndLabelContainer}>
              <Text style={styles.label}>Total Case</Text>
            </View>
            <Text style={styles.dataText}>{data?.totalCase}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.iconAndLabelContainer}>
              <Text style={styles.label}>New Death</Text>
            </View>
            <Text style={styles.dataText}>{data?.newDeath}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.iconAndLabelContainer}>
              <Text style={styles.label}>Total Death</Text>
            </View>
            <Text style={styles.dataText}>{data?.totalDeath}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.iconAndLabelContainer}>
              <Text style={styles.label}>Critical</Text>
            </View>
            <Text style={styles.dataText}>{data?.critical}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.iconAndLabelContainer}>
              <Text style={styles.label}>Recovered</Text>
            </View>
            <Text style={styles.dataText}>{data?.recovered}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title="Close" onPress={onCancel} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DetailModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  country: {
    fontSize: 20,
    fontFamily: "MontserratBold",
    textAlign: "center",
    marginVertical: 10,
    color: colors.primary,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1.5,
  },
  dateContainer: {},
  date: {
    color: "grey",
    textAlign: "center",
    fontSize: 12,
    fontFamily: "MontserratRegular",
    marginBottom: 10,
  },
  row: {
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconAndLabelContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontFamily: "MontserratBold",
    marginBottom: 5,
    color: colors.textColor,
  },
  dataText: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "MontserratRegular",
    color: colors.textColor,
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    left: "25%",
    width: "100%",
  },
});
