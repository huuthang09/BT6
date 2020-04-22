import React from "react";
import { StyleSheet, View } from "react-native";

import { SocialIcon } from "react-native-elements";
import Bubble from "../Components/Bubble";

export default function SocialIconComponent(props){
    return(
        <View style={styles.shareIcon}>
            <SocialIcon type= {props.type} />
            <Bubble txt= {props.txt} />
          </View>
    );
}

const styles = StyleSheet.create({ 
    shareIcon: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  