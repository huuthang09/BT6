import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Card } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ProductItem(item, screen) {
  return (
    <TouchableOpacity
      onPress={() => screen.navigate("ProductPage", item)}
      style={{
        minWidth: Dimensions.get("window").width / 2,
        maxWidth: Dimensions.get("window").width,
      }}
    >
      <Card>
        <Image
          style={{ height: hp("25%") }}
          source={{ uri: item.image }}
          resizeMode="contain"
        />

        <View style={styles.newContainer}>
          <Image
            style={{ width: 80, height: 20 }}
            source={{
              uri: item.new ? "https://i.ibb.co/87dJzBC/new.png" : null,
            }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.txtContainer}>
          <Text style={styles.txtName}>{item.name}</Text>
          <View style={styles.priceContainer}>
            <Text
              style={
                item.newPrice == null ? styles.txtPrice : styles.txtOldPrice
              }
            >
              {item.price}
            </Text>
            <Text style={styles.txtNewPrice}> {item.newPrice}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  txtContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  txtName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  priceContainer: {
    flexDirection: "row",
  },

  newContainer: {
    position: "absolute",
    marginTop: hp("5%"),
  },

  txtPrice: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#aaabbc",
  },

  txtOldPrice: {
    textDecorationLine: "line-through",
    fontSize: 13,
    fontWeight: "bold",
    color: "#aaabbc",
  },

  txtNewPrice: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#F00",
  },
});
