import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function WomanTab(props) {
  return (
    <View style={styles.buttonContainer}>
      <Button
        onPress={props.womanScreen}
        uppercase={false}
        contentStyle={{ width: wp("50%") }}
        mode="contained"
        color="#3a4144"
      >
        View Woman Items
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
