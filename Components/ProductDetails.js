import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Card } from "native-base";


export default function ProductDetails(props) {
  return (
      <Card>
        <Image
          style={{ width: "100%", height: hp("25%") }}
          source={{ uri: props.image }}
          resizeMode="contain"
        />
        <View style={styles.txtContainer}>
          <Text style={styles.txtName}>{props.name}</Text>
          <Button
            uppercase={false}
            contentStyle={{ width: wp("30%") }}
            labelStyle={{ fontSize: 13, color: "#FFF" }}
            mode="contained"
            color="#bfbfc4"
          >
            {props.price}
          </Button>
        </View>
      </Card>
  );
}

const styles = StyleSheet.create({
    txtContainer: {
      marginHorizontal: wp("10%"),
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: hp("2%"),
      alignItems: "center",
    },
  });
  
