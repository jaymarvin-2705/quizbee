import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>Quiz Bee Challenge</Text>
      <Text style={styles.subtitle}>
        Test your knowledge and beat the leaderboard!
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("Leaderboard")}
      >
        <Text style={styles.buttonText}>Leaderboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6EC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFB100",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FFB100",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  secondaryButton: {
    backgroundColor: "#FFD966",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});