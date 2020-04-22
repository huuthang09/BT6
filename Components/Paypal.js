import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card, Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Paypal() {
  return (
    <Card style={styles.cardContainer}>
      <Button
        mode="contained"
        style={styles.btnMethod}
        labelStyle={styles.txtMethod}
        color="#38474f"
      >
        select a pay method
      </Button>

      <Button
        style={styles.btnpaypal}
        icon="radiobox-marked"
        uppercase={false}
        mode="text"
        color="#323c3f"
      >
        Paypal
      </Button>

      <Image
        style={{ width: 50, height: 15, alignSelf: "center" }}
        source={require("../assets/home/paypal.png")}
        resizeMode="contain"
      />

      <View style={styles.visa}>
        <Image
          style={{ width: 75, height: 40, alignSelf: "center" }}
          source={require("../assets/home/visa.png")}
          resizeMode="contain"
        />
        <Image
          style={{ width: 75, height: 40, alignSelf: "center" }}
          source={require("../assets/home/visa2.png")}
          resizeMode="contain"
        />
        <Image
          style={{ width: 75, height: 40, alignSelf: "center" }}
          source={require("../assets/home/visa3.png")}
          resizeMode="contain"
        />
        <Image
          style={{ width: 75, height: 40, alignSelf: "center" }}
          source={require("../assets/home/visa4.png")}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.what}>What is Paypal?</Text>
      <View style={styles.container}></View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  txtMethod: {
    fontSize: 18,
  },

  visa: {
      marginVertical:hp("2%"),
      flexDirection:'row',
      justifyContent:'space-between'
  },

  btnMethod: {
    height: hp("6.5%"),
  },
  btnpaypal: {
    width: wp("35%"),
  },

  what: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#7e7e85",
  },

  cardContainer: {
    marginVertical: 10,
  },

  txtContent: {
    color: "#9b9ba0",
  },
});
