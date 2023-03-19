import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Button({ onPress, title, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
      disabled={disabled}
    >
      <LinearGradient
        colors={["#8E2DE2", "#4A00E0"]}
        style={styles.gradient}
        start={[0, 0]}
        end={[1, 1]}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  gradient: {
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    zIndex: 1,
  },
});
