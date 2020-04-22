import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Card, Icon } from "native-base";
import ChooseColor from "../Components/ChooseColor";
import ChooseSize from "../Components/ChooseSize";

export default function ColorAndSize() {
  return (
    <Card style={styles.container}>
      <Text style={styles.txtColour}>Colour:</Text>
      <Text style={styles.txtChooseColour}>Choose a colour for item</Text>
      <View style={styles.chooseColorContainer}>
        <ChooseColor color="#f0c9ce" />

        <ChooseColor color="#af687a" />

        <ChooseColor color="#87a6b2" />
      </View>

      <View
        style={{
          backgroundColor: "#dcdcdc",
          height: 1.5,
          width: "80%",
          marginVertical: hp("1%"),
        }}
      />

      <Text style={styles.txtColour}>Size:</Text>
      <Text style={styles.txtChooseColour}>Size available for this item</Text>
      <View style={styles.chooseColorContainer}>
        <ChooseSize txtSize="6" />
        <ChooseSize txtSize="8" />
        <ChooseSize txtSize="10" />
        <ChooseSize txtSize="12" />
        <ChooseSize txtSize="14" />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    height: wp("50%"),
    alignItems: "center",
  },

  txtColour: {
    fontWeight: "bold",
  },
  txtChooseColour: {
    fontWeight: "bold",
    color: "#a6a6ad",
  },

  chooseColorContainer: {
    marginTop: hp("1%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
