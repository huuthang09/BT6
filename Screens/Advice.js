import React from "react";
import { StyleSheet, View } from "react-native";
import AdviceTab from "../Components/AdviceTab";

export default function Advice({ navigation }) {
  return (
    <View style={styles.container}>
      <AdviceTab moveScreen={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
