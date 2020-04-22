import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ChooseColor(props) {
  const [check, setCheck] = useState({ like: false });
  const toggleCheck = () => setCheck({ like: !check.like });

  return (
    <TouchableOpacity
      onPress={toggleCheck}
      style={check.like ? styles.chooseContainer : styles.container}
    >
      <Text style={check.like ? styles.txtCheck : styles.txtNotCheck}>
        {props.txtSize}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp("3%"),
    borderRadius: 3,
    backgroundColor: "#dadade",
  },

  chooseContainer: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp("3%"),
    borderRadius: 3,
    backgroundColor: "#67b0d6",
  },

  txtNotCheck: {
    fontWeight: "bold",
    color: "#444c4f",
  },

  txtCheck: {
    fontWeight: "bold",
    color: "#FFF",
  },
});
