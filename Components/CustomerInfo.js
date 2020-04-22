import React from "react";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import InfoInput from "../Components/InfoInput";
import ZipPhoneInput from "../Components/ZipPhoneInput";
import SelectCountryInput from "../Components/SelectCountryInput";

export default function CustomerInfo() {
  return (
    <View style={styles.container}>
      <SelectCountryInput />
      <InfoInput title="Full Name" />

      <InfoInput title="Address line one" />

      <InfoInput title="Address line two" />

      <InfoInput title="Town / City" />

      <View style={styles.zipPhoneContainer}>
        <ZipPhoneInput title="Postcode / Zip" />
        <ZipPhoneInput title="Phone" />
      </View>

      <InfoInput title="E-Mail Address" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  zipPhoneContainer: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
});
