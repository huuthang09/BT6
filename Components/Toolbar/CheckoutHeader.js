import { StyleSheet, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

export default function CheckoutHeader(props) {
  return (
    <View>
      <Appbar.Header style={styles.appBarStyle}>
        <Appbar.BackAction
          onPress={props.screen}
          icon="chevron-left"
          size={30}
          color="#3b4850"
        />
        <Appbar.Content title="Checkout" color="#FFF" />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarStyle: {
    backgroundColor: "#f6846a",
  },
});
