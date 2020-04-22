import React from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Searchbar } from "react-native-paper";
import { Card } from "native-base";

export default function AllTab() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/advice/h1.png")}
        resizeMode="stretch"
      />

      <Image
        style={styles.img}
        source={require("../../assets/advice/h2.png")}
        resizeMode="stretch"
      />

      <View style={styles.barContainer}>
        <Searchbar placeholder="Search a item.." />
      </View>

      <View style={styles.cardContainer}>
        <Card style={styles.cardImgContainer}>
          <Image
            style={styles.cardImg}
            source={require("../../assets/advice/h3.png")}
            resizeMode="stretch"
          />
          <Text style={styles.txtCard}>SUMMER 2015</Text>
        </Card>

        <Card style={styles.cardImgContainer}>
          <Image
            style={styles.cardImg}
            source={require("../../assets/advice/h4.png")}
            resizeMode="stretch"
          />
          <Text style={styles.txtCard}>WINTER 14/15</Text>
        </Card>
      </View>

      <Card>
        <Image
          style={styles.cardImg}
          source={require("../../assets/advice/h5.png")}
          resizeMode="stretch"
        />
        <Text style={styles.txtCard}>PREMIUM</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  cardContainer: {
    flexDirection: "row",
    flex: 1,
  },

  txtCard: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#323c3f",
  },

  cardImgContainer: {
    flex: 0.5,
  },

  cardImg: {
    width: "100%",
    height: hp("21%"),
  },

  barContainer: {
    marginHorizontal: wp("5%"),
    marginVertical: hp("1%"),
  },

  img: {
    width: "100%",
    height: hp("20%"),
  },
});
