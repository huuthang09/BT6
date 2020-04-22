import React from "react";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Badge } from "react-native-paper";

export default function CustomBadge(props) {
  return (
    <Badge size={15} style={styles.container}>
      {props.number}
    </Badge>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: hp("0.5%"),
    fontSize: 12,
    color: "#000",
    backgroundColor: "#FFF",
    fontWeight: "bold",
  },
});
