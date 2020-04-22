import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomImageIcon from "../CustomImageIcon";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function WomanHeader({ navigation, title }) {
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
        </TouchableOpacity>

        <CustomImageIcon source={require("../../assets/home/h4.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  cartContainer: {
    marginRight: wp("5%"),
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
});
