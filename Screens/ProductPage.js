import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ProductHeader from "../Components/Toolbar/ProductHeader";
import { Card, Icon } from "native-base";
import ColorAndSize from "../Components/ColorAndSize";
import ProductDetails from "../Components/ProductDetails";
import SocialIconComponent from "../Components/SocialIcon";

export default function ProductPage({ route, navigation }) {
  const { title } = route.params;
  const { image } = route.params;
  const { price } = route.params;
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <ProductHeader
        title={title}
        screen={() => navigation.navigate("BillDetails")}
        backScreen={() => navigation.navigate("Home")}
      />
      <ScrollView>
        <ProductDetails name={name} image={image} price={price} />

        <Card style={styles.descriptionContainer}>
          <View style={{ marginLeft: wp("10%") }}>
            <Icon
              type="FontAwesome"
              name="plus"
              style={{ fontSize: 20, color: "#a6a6ad" }}
            />
          </View>
          <Text style={styles.txtDescription}>Description</Text>
        </Card>

        <ColorAndSize />

        <View style={styles.buttonAdd}>
          <Button
            onPress={() => navigation.navigate("BillDetails")}
            uppercase={false}
            labelStyle={{ fontSize: 13, color: "#FFF" }}
            mode="contained"
            color="#3a4144"
          >
            Add to Cart
          </Button>
        </View>

        <View style={styles.txtShareContainer}>
          <Text style={styles.txtShare}>SHARE ON</Text>
          <View
            style={{ backgroundColor: "#dcdcdc", height: 3, width: "80%" }}
          />
        </View>

        <View style={styles.shareContainer}>
          <SocialIconComponent type="twitter" txt = "205" />

          <SocialIconComponent type="facebook" txt = "332" />

          <SocialIconComponent type="pinterest" txt  = "112"/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  shareContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },


  buttonAdd: {
    width: wp("40%"),
    alignSelf: "center",
    marginVertical: hp("1%"),
  },

  txtShareContainer: {
    marginVertical: hp("2%"),
    flexDirection: "row",
    marginHorizontal: wp("5%"),
    alignItems: "center",
  },

  txtShare: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },

  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: hp("8%"),
  },

  txtDescription: {
    color: "#323c3f",
    fontWeight: "bold",
    marginLeft: wp("5%"),
  },
});
