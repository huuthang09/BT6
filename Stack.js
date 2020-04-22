import React from "./node_modules/react";
import { createStackNavigator } from "./node_modules/@react-navigation/stack";
import Header from "./Components/Toolbar/HomeHeader";
import AdviceHeader from "./Components/Toolbar/AdviceHeader";
import WomanHeader from "./Components/Toolbar/WomanHeader";
import Home from "./Screens/Home";
import Advice from "./Screens/Advice";
import Woman from "./Screens/Woman";
import ProductPage from "./Screens/ProductPage";
import BillDetails from "./Screens/BillDetails";
import Cart from "./Screens/Cart";
import { NavigationContainer } from "./node_modules/@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#67b0d6",
            elevation: 0,
          },
          headerTintColor: "#fff",
          headerLeft: null,
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#FFF",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => {
            return {
              headerTitle: () => (
                <Header navigation={navigation} title="eCommerce" />
              ),
            };
          }}
        />

        <Stack.Screen
          name="Advice"
          component={Advice}
          options={({ navigation }) => {
            return {
              headerTitle: () => (
                <AdviceHeader navigation={navigation} title="Our Advice" />
              ),
            };
          }}
        />

        <Stack.Screen
          name="Woman"
          component={Woman}
          options={({ navigation }) => {
            return {
              headerTitle: () => (
                <WomanHeader navigation={navigation} title="Woman, Dresses" />
              ),
            };
          }}
        />

        <Stack.Screen
          name="ProductPage"
          component={ProductPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BillDetails"
          component={BillDetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
