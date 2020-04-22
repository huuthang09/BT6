import React, { useState } from "react";
import { View } from "react-native";

import { Icon } from "native-base";
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
      style={{
        width: 35,
        height: 35,
        backgroundColor: props.color,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: wp("3%"),
        borderRadius: 3,
      }}
    >
      <View style={{ display: check.like ? "flex" : "none" }}>
        <Icon
          type="FontAwesome5"
          name="check-circle"
          style={{ fontSize: 20, color: "#FFF" }}
        />
      </View>
    </TouchableOpacity>
  );
}
