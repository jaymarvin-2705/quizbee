import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Card, Button } from "react-native-paper";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Profile</Text>
      <Text style={styles.subText}>Manage your QuizBee account details</Text>

      {/* Profile Image */}
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        }}
        style={styles.avatar}
      />

      {/* Info Card */}
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>Cristian Quizmaster</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>Cristian@example.com</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Level:</Text>
            <Text style={styles.value}>Level 3 - Quiz Expert 🏆</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Joined:</Text>
            <Text style={styles.value}>January 2025</Text>
          </View>
        </Card.Content>
      </Card>

      {/* Button */}
      <Button
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonText}
        onPress={() => console.log("Edit Profile")}
      >
        Edit Profile
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a", // Dark background
    alignItems: "center",
    padding: 20,
  },
  header: {
    color: "#FFD300", // Bee gold
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 5,
    textAlign: "center",
  },
  subText: {
    color: "#ccc",
    fontSize: 15,
    marginBottom: 25,
    textAlign: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFD300",
    marginBottom: 20,
  },
  card: {
    width: "90%",
    backgroundColor: "#1a1a1a",
    borderColor: "#FFD300",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 10,
    marginBottom: 30,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  label: {
    color: "#FFD300",
    fontSize: 16,
    fontWeight: "600",
  },
  value: {
    color: "#ccc",
    fontSize: 15,
    flexShrink: 1,
    textAlign: "right",
  },
  button: {
    backgroundColor: "#FFD300",
    borderRadius: 12,
    paddingHorizontal: 40,
    paddingVertical: 5,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProfileScreen;
