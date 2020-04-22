import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { List, ListItem, Left, Right, Icon } from "native-base";
import { Searchbar } from "react-native-paper";
import Chip from "../Components/Chip";
import ProductItem from "../Components/ProductItem";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getDataWomanRequest } from "../actions/PopularActions";

export default function Woman({ navigation }) {
  
  const woman = useSelector((state) => state.getWoman);
  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    query: "",
    data: [],
    searching: false
  });

  useEffect(() => {
    getWoman();
  }, []);

  const getWoman = () => {
    dispatch(getDataWomanRequest());
    setSearch({
      data: woman.data,
    });
  };

  const onChangeSearch = (text) => {
    if (text.length == 0) {
      getWoman();
    }else{
      const formatQuery = text.toLowerCase();
      const data = _.filter(woman.data, (data) => {
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
      <List>
        <ListItem noIndent style={{ backgroundColor: "#67b0d6" }}>
          <Left>
            <Text style={styles.txtList}>Casual Dresses</Text>
          </Left>
          <Right>
            <Icon
              type="AntDesign"
              name="right"
              style={{ fontSize: 20, color: "#FFF" }}
            />
          </Right>
        </ListItem>
      </List>

      <Searchbar
        placeholder="Search a item.."
        onChangeText={(text) => onChangeSearch(text)}
      />
      <Chip />

      <FlatList
        data= {search.searching?search.data:woman.data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => ProductItem(item, navigation)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  txtList: {
    fontSize: 16,
    color: "#FFF",
  },
});
