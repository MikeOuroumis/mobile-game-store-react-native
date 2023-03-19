import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProductsScreen } from "../screens/ProductsScreen";
import { PurchasedProductsScreen } from "../screens/PurchasedProductsScreen";
import { Ionicons } from "@expo/vector-icons";

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const navigationRef = React.createRef();

function ProductsStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Products" component={ProductsScreen} />
    </RootStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Products") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Purchased Products") {
            iconName = focused ? "cart" : "cart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4A00E0",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Purchased Products"
        component={PurchasedProductsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
