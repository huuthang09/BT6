import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomBadge from "../CustomBadge";
import CustomImageIcon from "../CustomImageIcon";

export default function Header({ navigation, title }) {
  return (
    <View style={styles.container}>
      <CustomImageIcon source={require("../../assets/home/h1.png")} />

      <Text style={styles.title}>{title}</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BillDetails")}
          style={styles.cartContainer}
        >
          <CustomImageIcon source={require("../../assets/home/h2.png")} />
          <View style={styles.badgeContainer}>
            <CustomBadge number="3" />
          </View>
        </TouchableOpacity>

        <CustomImageIcon source={require("../../assets/home/h3.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    marginLeft: wp("5%"),
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },

  iconContainer: {
    flexDirection: "row",
    position: "absolute",
    left: wp("70%"),
  },

  cartContainer: {
    flexDirection: "row",
    marginRight: wp("5%"),
  },

  badgeContainer: {
    position: "absolute",
    left: wp("5%"),
  },
});
