import React from "react";
import { StyleSheet, View } from "react-native";
import CustomSwiper from "../Components/CustomSwiper";
import CustomList from "../Components/CustomList";
import { Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomSwiper />
      <CustomList screen={navigation} />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate("Advice")}
          uppercase={false}
          contentStyle={{ width: wp("40%") }}
          mode="contained"
          color="#3a4144"
        >
          View all Items
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: hp("80%"),
    alignSelf: "center",
  },
});
