import React from "react";
import { Container, Tab, Tabs } from "native-base";
import AllTab from "../Screens/AdviceTab/All";
import WomanTab from "../Screens/AdviceTab/WomanTab";

export default function AdviceTab(props) {
  return (
    <Container>
      <Tabs
        page={0}
        initialPage={0}
        tabBarUnderlineStyle={{ backgroundColor: "#000" }}
      >
        <Tab
          textStyle={{ color: "#FFF" }}
          activeTextStyle={{ color: "#000" }}
          activeTabStyle={{ backgroundColor: "#67b0d6" }}
          tabStyle={{ backgroundColor: "#67b0d6" }}
          heading="ALL"
        >
          <AllTab />
        </Tab>
        <Tab
          textStyle={{ color: "#FFF" }}
          activeTextStyle={{ color: "#000" }}
          activeTabStyle={{ backgroundColor: "#67b0d6" }}
          tabStyle={{ backgroundColor: "#67b0d6" }}
          heading="MAIN"
        ></Tab>

        <Tab
          textStyle={{ color: "#FFF" }}
          activeTextStyle={{ color: "#000" }}
          activeTabStyle={{ backgroundColor: "#67b0d6" }}
          tabStyle={{ backgroundColor: "#67b0d6" }}
          heading="WOMAN"
        >
          <WomanTab womanScreen={() => props.moveScreen.navigate("Woman")} />
        </Tab>

        <Tab
          textStyle={{ color: "#FFF" }}
          activeTextStyle={{ color: "#000" }}
          activeTabStyle={{ backgroundColor: "#67b0d6" }}
          tabStyle={{ backgroundColor: "#67b0d6" }}
          heading="KID"
        ></Tab>
      </Tabs>
    </Container>
  );
}
