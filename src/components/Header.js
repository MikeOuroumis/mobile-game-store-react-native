import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // import the component from Expo
import { useAppSelector } from "../store/store";
import bitcoinImg from "../assets/bitcoin.png";
import creditsImg from "../assets/credits.png";

export default function Header() {
  const creditsOpacity = useRef(new Animated.Value(0)).current;
  const credits = useAppSelector((state) => state.creditsSlice.credits);
  const currency = useAppSelector((state) => state.creditsSlice.currency);

  useEffect(() => {
    Animated.timing(creditsOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 1000,
    }).start();
  }, []);

  return (
    <LinearGradient
      colors={["#fff", "#fff", "transparent"]}
      style={styles.gradient}
    >
      <View style={styles.header}>
        <View style={styles.creditsContainer}>
          <Animated.Text
            style={[styles.creditText, { opacity: creditsOpacity }]}
          >
            {credits}
          </Animated.Text>
          <Animated.Image
            source={creditsImg}
            style={[styles.image, { opacity: creditsOpacity }]}
          />
        </View>

        <View style={styles.creditsContainer}>
          <Animated.Text
            style={[styles.creditText, { opacity: creditsOpacity }]}
          >
            {currency}
          </Animated.Text>
          <Animated.Image
            source={bitcoinImg}
            style={[styles.image, { opacity: creditsOpacity }]}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 0.2,
    width: "100%",
    height: 20,
    backgroundColor: "rgba(255, 255, 255, 0.0)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    paddingTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  creditText: {
    textAlign: "center",
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  creditsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 20,
  },
  creditsImage: {
    width: 30,
    height: 30,
  },
});
