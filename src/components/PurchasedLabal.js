import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function PurchasedLabel({ style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} disabled={true}>
      <LinearGradient
        colors={["rgb(0, 255, 0)", "rgb(0, 120, 0)"]}
        style={styles.gradient}
        start={[0, 0]}
        end={[1, 1]}
      >
        <Text style={styles.buttonText}>PURCHASED</Text>
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
