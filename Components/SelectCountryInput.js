import React, { useState } from "react";
import { View, StyleSheet, Picker } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Item, Icon } from "native-base";

export default function SelectCountryInput(props) {
  const [input, setInput] = useState({
    selected: "",
  });

  const toggleInput = (text) => {
    setInput({
      selected: text,
    });
  };

  return (
    <View style={styles.container}>
      <Item>
        <Picker
          style={styles.txtInput}
          selectedValue={input.selected}
          onValueChange={(itemValue) => toggleInput(itemValue)}
        >
          <Picker.Item color="#6c7c87" label="Select a Country" value="key0" />
          <Picker.Item color="#6c7c87" label="Ha Noi" value="key1" />
          <Picker.Item color="#6c7c87" label="TP HCM" value="key2" />
          <Picker.Item color="#6c7c87" label="Da Nang" value="key3" />
        </Picker>
        <View style={styles.iconPicker}>
          <Icon
            type="AntDesign"
            name="down"
            style={{ color: "white", fontSize: 30 }}
          />
        </View>
      </Item>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginVertical: hp("1%"),
    marginHorizontal: wp("3%"),
  },

  iconPicker: {
    height: hp("7.8%"),
    width: wp("14%"),
    backgroundColor: "#38474f",
    position: "absolute",
    left: wp("80%"),
    justifyContent: "center",
    alignItems: "center",
  },

  txtInput: {
    marginLeft: wp("4%"),
    fontSize: 15,
    width: "100%",
  },
});
