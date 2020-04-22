import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CheckoutHeader from "../Components/Toolbar/CheckoutHeader";
import { Button } from "react-native-elements";
import Payment from "../Components/Payment";
import Paypal from "../Components/Paypal";
import CarItemList from "../Components/CartItemList";

export default function Cart({ navigation }) {
  return (
    <View style={styles.container}>
      <CheckoutHeader screen={() => navigation.navigate("Home")} />
      <View style={styles.billingDetailsContainer}>
        <Text style={styles.txtBillingDetails}>Your Order</Text>
      </View>

      <ScrollView>
      <CarItemList/>
        <Paypal />
        <Payment />
        <Button
          onPress={() => navigation.navigate("Cart")}
          titleStyle={styles.title}
          buttonStyle={styles.buttonOrder}
          title="PLACE ORDER"
        />

        <Button
          onPress={() => navigation.navigate("Cart")}
          titleStyle={styles.title}
          buttonStyle={styles.buttonCancel}
          title="CANCEL"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  billingDetailsContainer: {
    height: hp("8%"),
    backgroundColor: "#38474f",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 13,
  },

  buttonOrder: {
    marginVertical: hp("1%"),
    backgroundColor: "#84b262",
    width: wp("50%"),
    alignSelf: "center",
  },

  buttonCancel: {
    marginVertical: hp("1%"),
    backgroundColor: "#e85653",
    width: wp("50%"),
    alignSelf: "center",
  },

  txtBillingDetails: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});
