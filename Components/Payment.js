import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card, RadioButton, Paragraph } from "react-native-paper";

export default function Payment() {
  const [check, setCheck] = useState({
    checked: "",
  });

  return (
    <Card>
      <View style={styles.container}>
        <RadioButton
          value="first"
          status={check.checked === "first" ? "checked" : "unchecked"}
          onPress={() => {
            setCheck({ checked: "first" });
          }}
        />
        <View>
          <Card.Title title="Cheque Payment" />
          <Card.Content>
            <Paragraph style={styles.txtContent}>
              Please send your cheque to Store Name, Store Street, Store Town,
              Store State/County, Store Postcode.
            </Paragraph>
          </Card.Content>
        </View>
      </View>

      <View style={styles.container}>
        <RadioButton
          value="second"
          status={check.checked === "second" ? "checked" : "unchecked"}
          onPress={() => {
            setCheck({ checked: "second" });
          }}
        />
        <View>
          <Card.Title title="Direct Bank Transfer" />
          <Card.Content>
            <Paragraph style={styles.txtContent}>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order won't be shipped
              until the funds have cleared in our account..
            </Paragraph>
          </Card.Content>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  txtContent: {
    color: "#9b9ba0",
  },
});
