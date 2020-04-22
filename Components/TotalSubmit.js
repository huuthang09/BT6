import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Divider } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button } from "react-native-elements";

export default function TotalSubmit(props) {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.btnContainer}>
          <Button
            title="FREE SHIPPING"
            buttonStyle={styles.btnStyle}
            titleStyle={styles.btnTitle}
          />
        </View>

        <Card.Title titleStyle={styles.title} title="SHIPPING AND HANDLING" />
        <Divider />
        <Card.Title title="ORDER TOTAL" titleStyle={styles.title} />
        <View style={styles.txtContainer}>
          <Text style={styles.txtTotal}>$ {props.total}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp("5%"),
  },

  btnContainer: {
    position: "absolute",
    left: wp("55%"),
    top: hp("1%"),
  },

  txtTotal: {
    color: "#F00",
  },

  txtContainer: {
    position: "absolute",
    left: wp("55%"),
    top: hp("10%"),
  },

  btnStyle: {
    backgroundColor: "#84b262",
    width: wp("30%"),
  },

  btnTitle: {
    fontSize: 12,
  },

  title: {
    fontSize: 14,
  },
});
