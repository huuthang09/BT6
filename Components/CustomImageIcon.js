import React from "react";
import { Image } from "react-native";

export default function CustomImageIcon(props) {
  return (
    <Image
      style={{ width: 25, height: 25 }}
      source={props.source}
      resizeMode="contain"
    />
  );
}
