import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View, ScrollView } from "react-native";
import Product from "../components/Product";
import Header from "../components/Header";
import products from "../components/ProductsList";
import backgroundImg from "../assets/background.jpg";

export function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <ImageBackground
        source={backgroundImg}
        style={styles.backgroundImage}
        resizeMode="repeat"
      >
        <ScrollView contentContainerStyle={styles.productContainer}>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              creditsPrice={product.creditsPrice}
              currencyPrice={product.currencyPrice}
            />
          ))}
        </ScrollView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: 1,
  },
  productContainer: {
    marginTop: 120,
    height: "150%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: "repeat",
    zIndex: -1,
  },
  header: {
    flex: 1,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 2,
  },
});
