import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomBadge from "../CustomBadge";
import CustomImageIcon from "../CustomImageIcon";
import { Icon } from "native-base";

export default function AdviceHeader({ navigation, title }) {
  return (
    <View style={styles.container}>
      <Icon
        onPress={() => navigation.navigate("Home")}
        type="Ionicons"
        name="md-arrow-round-back"
        style={{ fontSize: 20, color: "#394a53" }}
      />
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
    left: wp("80%"),
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
