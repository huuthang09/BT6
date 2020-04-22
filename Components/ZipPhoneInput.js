import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Item, Input, Icon } from "native-base";

export default function ZipPhoneInput(props) {
  const [input, setInput] = useState({
    length: "",
  });

  const checkInput = (text) => {
    setInput({
      length: text,
    });
  };

  return (
    <View style={styles.container}>
      <Item>
        <Input
          placeholder={props.title}
          onChangeText={(text) => checkInput(text)}
          style={styles.txtInput}
        />
        <Icon
          type="AntDesign"
          name={input.length == "" ? "close" : "check"}
          style={{ color: input.length == "" ? "red" : "green", fontSize: 13 }}
        />
      </Item>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 0.5,
    marginVertical: hp("1%"),
    marginHorizontal: wp("3%"),
  },

  txtInput: {
    marginLeft: wp("5%"),
    fontSize: 15,
  },
});
