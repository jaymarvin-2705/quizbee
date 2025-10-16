import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ResultScreen() {
  const route = useRoute();
  const { score, total } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Complete!</Text>
      <Text style={styles.score}>Your Score: {score} / {total}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFBE6" },
  title: { fontSize: 28, fontWeight: "bold", color: "#FFB100", marginBottom: 10 },
  score: { fontSize: 20, marginBottom: 30 },
  button: { backgroundColor: "#FFB100", padding: 15, borderRadius: 25 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});