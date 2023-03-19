import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
  Easing,
} from "react-native";
import { useAppSelector } from "../store/store";
import Product from "../components/Product";
import { LinearGradient } from "expo-linear-gradient";

export function PurchasedProductsScreen() {
  const purchasedProducts = useAppSelector(
    (state) => state.productsSlice.purchasedProducts
  );
  const [fadeInValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeInValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={[
          "rgba(0, 255, 0, 1)",
          "rgba(0, 255, 0, 1)",
          "#fff",
          "transparent",
        ]}
        style={styles.gradient}
      >
        <Animated.Text
          style={[
            styles.text,
            {
              opacity: fadeInValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ]}
        >
          Purchased Products
        </Animated.Text>
      </LinearGradient>
      <View style={styles.productContainer}>
        {purchasedProducts.length > 0 ? (
          purchasedProducts.map((product) => (
            <Product
              key={product.id}
              image={product.image}
              price={product.price}
              purchased={product.purchased}
            />
          ))
        ) : (
          <Text style={styles.text}>No purchased products</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  gradient: {
    alignItems: "center",
    paddingVertical: 10,
    flex: 1,
    width: "100%",
    height: 20,
  },
  text: {
    textShadowColor: "#fff",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
    fontSize: 24,
    color: "#000",
    marginVertical: 15,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  productContainer: {
    flex: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});
