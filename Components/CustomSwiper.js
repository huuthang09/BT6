import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Swiper from "react-native-swipe-cus";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function CustomSwiper() {
  return (
    <View style={{ height: hp("25%") }}>
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        showsButtons={true}
        activeDotColor="#F00"
      >
        <Image
          source={{ uri: "https://i.ibb.co/cLgDhF3/ads1.png" }}
          style={styles.slide}
          resizeMode="stretch"
        />
        <Image
          source={{
            uri:
              "https://img.freepik.com/free-vector/promotion-fashion-banner_1188-223.jpg?size=626&ext=jpg",
          }}
          style={styles.slide}
          resizeMode="stretch"
        />
        <Image
          source={{
            uri:
              "https://image.freepik.com/free-vector/promotion-fashion-banner_1188-161.jpg",
          }}
          style={styles.slide}
          resizeMode="stretch"
        />

        <Image
          source={{
            uri:
              "https://sourcepsd.com/wp-content/uploads/2019/09/Fashion-Banner-14520.jpg",
          }}
          style={styles.slide}
          resizeMode="stretch"
        />

        <Image
          source={{
            uri:
              "https://cdn.dribbble.com/users/950594/screenshots/3982579/banner.jpg",
          }}
          style={styles.slide}
          resizeMode="stretch"
        />
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
});
