import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card, Icon } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Avatar } from "react-native-paper";
import { Chip } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SubmitCartItem(item) {
  return (
    <View style={styles.container}>
      <Card>
        <TouchableOpacity style={styles.cancelContainer}>
          <Icon
            type="MaterialIcons"
            name="cancel"
            style={{ fontSize: 25, color: "#d3d5d6" }}
          />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <Avatar.Image size={65} source={{ uri: item.image }} />
          <View>
            <Text style={styles.txtName}>{item.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Chip textStyle={{ fontSize: 10 }}>SIZE: 8</Chip>
              <Chip textStyle={{ fontSize: 10 }}>x1</Chip>
            </View>
          </View>
          <Text style={styles.txtPrice}>{item.price}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp("5%"),
    marginVertical: hp("0.5%"),
  },

  cancelContainer: {
      alignSelf:'flex-end'
  },

  txtPrice: {
    fontWeight: "bold",
    color: "#a6a6ad",
  },

  txtName: {
    fontWeight: "bold",
    color: "#323c3f",
  },

  contentContainer: {
    marginHorizontal: wp("5%"),
    marginVertical: hp("0.5%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
