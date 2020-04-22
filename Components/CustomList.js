import React, { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ProductItem from "../Components/ProductItem";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getDataRequest } from "../actions/PopularActions";

export default function CustomList(props) {
  const popular = useSelector((state) => state.getPopular);
  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    query: "",
    data: [],
    searching: false
  });

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = () => {
    dispatch(getDataRequest());
    setSearch({
      data: popular.data,
    });
  };

  const onChangeSearch = (text) => {
    if (text.length == 0) {
      getPopular();
    }else{
      const formatQuery = text.toLowerCase();
      const data = _.filter(popular.data, (data) => {
        if (data.name.toLowerCase().includes(formatQuery)) {
          return true;
        } else false;
      });
      setSearch({
        data: data,
        query: text,
        searching: true
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <Searchbar
          placeholder="Search a item.."
          onChangeText={(text) => onChangeSearch(text)}
        />
      </View>
      <Image style={styles.line} source={require("../assets/home/line.png")} />
      <Text style={styles.txtTitle}>OUR POPULAR PRODUCTS</Text>
      <Image style={styles.line} source={require("../assets/home/line.png")} />
      <FlatList
        data= {search.searching?search.data:popular.data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => ProductItem(item, props.screen)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  line: {
    width: "50%",
    height: 2,
    alignSelf: "center",
    marginVertical: hp("0.5%"),
  },

  barContainer: {
    marginHorizontal: wp("5%"),
    marginVertical: hp("1%"),
  },

  txtTitle: {
    alignSelf: "center",
    fontFamily: "Serif",
    fontSize: 22,
    color: "#323c3f",
  },
});
