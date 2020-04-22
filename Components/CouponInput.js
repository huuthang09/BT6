import React from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button } from "react-native-elements";

export default function CouponInput() {
  return (
    <View>
      <Image
        style={styles.imgCoupon}
        source={require("../assets/home/coupon.png")}
      />
      <View style={styles.txtInputCouponContainer}>
        <View style={styles.edtInputCoupon}>
          <TextInput
            style={styles.txtInputCoupon}
            allowFontScaling={true}
            placeholder="Coupon Code here.."
          />
        </View>

        <Button
          title="APPLY"
          titleStyle={{ color: "#000", fontSize: 13 }}
          buttonStyle={{
            width: wp("30%"),
            backgroundColor: "#FFF",
            height: hp("5%"),
            marginLeft: wp("2%"),
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtInputCoupon: {
    marginLeft: wp("3%"),
    fontWeight: "bold",
  },

  edtInputCoupon: {
    backgroundColor: "rgba(255,255,255,0.2)",
    width: "60%",
    borderRadius: 3,
    marginLeft: wp("3%"),
  },

  txtInputCouponContainer: {
    top: hp("15%"),
    position: "absolute",
    width: "100%",
    height: hp("5%"),
    flexDirection: "row",
  },

  imgCoupon: {
    width: "100%",
    height: hp("25%"),
  },
});
