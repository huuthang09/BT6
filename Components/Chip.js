import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "native-base";

export default function Chip() {
  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        <Text style={styles.txtList}>TOP RATED</Text>
        <View style={styles.icon}>
          <Icon type="AntDesign" name="closecircle" style={{ fontSize: 13 }} />
        </View>
      </View>

      <View style={styles.chipContainer}>
        <Text style={styles.txtList}>SIZE: M</Text>
        <View style={styles.icon}>
          <Icon type="AntDesign" name="closecircle" style={{ fontSize: 13 }} />
        </View>
      </View>

      <View style={styles.chipContainer}>
        <Text style={styles.txtList}>SPRING</Text>
        <View style={styles.icon}>
          <Icon type="AntDesign" name="closecircle" style={{ fontSize: 13 }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: hp("2%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  chipContainer: {
    marginHorizontal: wp("2%"),
    backgroundColor: "#a6a6ad",
    flexDirection: "row",
    padding: 5,
  },

  icon: {
    marginLeft: wp("1%"),
  },

  txtList: {
    fontSize: 10,
    color: "#FFF",
    fontWeight: "bold",
  },
});
