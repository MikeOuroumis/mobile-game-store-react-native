import { useRef, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Animated, Alert } from "react-native";
import Button from "./Button";
import { useAppSelector, useAppDispatch } from "../store/store";
import { setCredits, setCurrency } from "../store/slices/creditsSlice";
import { addPurchasedProduct } from "../store/slices/productsSlice";
import creditImage from "../assets/credits.png";
import currencyImage from "../assets/bitcoin.png";
import PurchasedLabel from "./PurchasedLabal";

export default function Product({
  image,
  creditsPrice,
  id,
  purchased,
  currencyPrice,
}) {
  const dispatch = useAppDispatch();
  const productAnimation = useRef(new Animated.Value(0)).current;
  const credits = useAppSelector((state) => state.creditsSlice.credits);
  const currency = useAppSelector((state) => state.creditsSlice.currency);
  const [isPurchased, setIsPurchased] = useState(purchased);

  function handlePress() {
    if (isPurchased) {
      Alert.alert("You have already purchased this product");
    }
    if (currencyPrice) {
      if (currency < currencyPrice) {
        Alert.alert("You don't have enough premium currency");
      } else {
        Alert.alert(
          "Confirmation",
          "Are you sure you want to purchase this product?",
          [
            {
              text: "Yes",
              onPress: handlePurchaseWithCurrency,
            },
            {
              text: "No",
            },
          ],
          {
            cancelable: false,
          }
        );
      }
    }
    if (creditsPrice) {
      if (credits < creditsPrice) {
        Alert.alert("You don't have enough credits");
      } else {
        Alert.alert(
          "Confirmation",
          "Are you sure you want to purchase this product?",
          [
            {
              text: "Yes",
              onPress: handlePurchaseWithCredits,
            },
            {
              text: "No",
              style: "cancel",
            },
          ],
          {
            cancelable: false,
          }
        );
      }
    }
  }

  function handlePurchaseWithCredits() {
    dispatch(setCredits(credits - creditsPrice));
    dispatch(addPurchasedProduct({ id, image, creditsPrice, purchased: true }));
    setIsPurchased(true);
    Alert.alert(`You bought the product with credits`);
  }

  function handlePurchaseWithCurrency() {
    dispatch(setCurrency(currency - currencyPrice));
    dispatch(
      addPurchasedProduct({ id, image, currencyPrice, purchased: true })
    );
    setIsPurchased(true);
    Alert.alert(`You bought the product with currency`);
  }

  useEffect(() => {
    Animated.timing(productAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: productAnimation }}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {creditsPrice && (
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{creditsPrice}</Text>
            <Image source={creditImage} style={styles.creditsImage} />
          </View>
        )}
        {currencyPrice && (
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{currencyPrice}</Text>
            <Image source={currencyImage} style={styles.creditsImage} />
          </View>
        )}
        {isPurchased ? (
          <PurchasedLabel />
        ) : (
          <Button title="BUY" onPress={handlePress} />
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    width: 170,
    height: 170,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  price: {
    fontSize: 14,
    color: "#fff",
    marginRight: 5,
  },
  priceContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 0,
    right: 0,
    marginBottom: 36,
    marginRight: 3,
    zIndex: 1,
  },
  creditsImage: {
    width: 20,
    height: 20,
  },
  purchased: {
    backgroundColor: "rgba(0, 255, 0, 1)",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
