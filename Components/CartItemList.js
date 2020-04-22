import React, { useState, useEffect } from "react";
import {View, FlatList } from "react-native";
import api from "../database/popitem.json";
import SubmitCartItem from "../Components/SubmitCartItem";
import TotalSubmit from "../Components/TotalSubmit";

export default function CartItemList() {
  useEffect(() => {
    toggleSum();
  }, []);

  const [sum, setSum] = useState({
    total: 0,
  });

  const toggleSum = () => {
    let total = 0;
    for (let i = 0; i < api.length; i++) {
      total += api[i].numprice;
    }

    setSum({
      total: total,
    });
  };
  return (
    <View>
      <FlatList
        data={api}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => SubmitCartItem(item)}
      />

      <TotalSubmit total={sum.total} />
    </View>
  );
}
