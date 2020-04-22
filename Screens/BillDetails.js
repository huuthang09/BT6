import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CheckoutHeader from "../Components/Toolbar/CheckoutHeader";
import CouponInput from "../Components/CouponInput";
import CustomerInfo from "../Components/CustomerInfo";
import { Button } from "react-native-elements";

export default function BillDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <CheckoutHeader screen={() => navigation.navigate("Home")} />
      <View style={styles.billingDetailsContainer}>
        <Text style={styles.txtBillingDetails}>Billing Details</Text>
      </View>
      <ScrollView>
        <CouponInput />
        <CustomerInfo />
        <Button
        onPress={() => navigation.navigate("Cart")}
        titleStyle={styles.title}
        buttonStyle={styles.button}
        title="NEXT - YOUR ORDER"
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 13,
  },

  button: {
    marginVertical: hp("1%"),
    backgroundColor: "#84b262",
    width: wp("50%"),
    alignSelf: "center",
  },

  billingDetailsContainer: {
    height: hp("8%"),
    backgroundColor: "#38474f",
    justifyContent: "center",
    alignItems: "center",
  },

  txtBillingDetails: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});
