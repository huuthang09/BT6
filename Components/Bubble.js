import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Bubble(props) {
  return (
    <View>
      <Image
        style={styles.bubble}
        source={require("../assets/advice/bubble.png")}
        resizeMode="contain"
      />
      <Text style={styles.txtBubble}>{props.txt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txtBubble: {
    fontSize: 13,
    position: "absolute",
    alignSelf: "center",
    color: "#323c3f",
  },

  bubble: {
    width: 50,
    height: 30,
  },
});
