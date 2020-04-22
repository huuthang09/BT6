import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import CustomBadge from "../CustomBadge";
import { Icon } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button } from "react-native-paper";

export default function ProductHeader(props) {
  return (
    <View style={{ backgroundColor: "#38474f" }}>
      <Appbar.Header style={styles.appBarStyle}>
        <Icon
          onPress={props.backScreen}
          type="Ionicons"
          name="md-arrow-round-back"
          style={{ fontSize: 20, color: "#000" }}
        />
        <Appbar.Content title={props.title} />
        <TouchableOpacity onPress={props.screen} style={styles.cartContainer}>
          <Icon
            type="FontAwesome5"
            name="shopping-cart"
            style={{ fontSize: 20, color: "#000" }}
          />
          <View style={styles.badgeContainer}>
            <CustomBadge number="3" />
          </View>
        </TouchableOpacity>
      </Appbar.Header>

      <View style={styles.buttonContainer}>
        <Button
          onPress={props.screen}
          contentStyle={{ width: wp("43%") }}
          labelStyle={{ fontSize: 12 }}
          mode="contained"
          color="#2d3a40"
        >
          ADD TO WISHLIST
        </Button>

        <Button
          onPress={props.screen}
          contentStyle={{ width: wp("43%") }}
          labelStyle={{ fontSize: 12, color: "#FFF" }}
          mode="contained"
          color="#f6846a"
        >
          ADD TO CART
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarStyle: {
    backgroundColor: "#38474f",
    elevation: 0,
  },

  cartContainer: {
    flexDirection: "row",
    marginRight: wp("5%"),
  },

  badgeContainer: {
    position: "absolute",
    left: wp("5%"),
  },

  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: wp("5%"),
    marginVertical: hp("2%"),
    justifyContent: "space-between",
  },
});
