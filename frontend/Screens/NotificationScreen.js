import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text, Card, Avatar } from "react-native-paper";

const notifications = [
  {
    id: "1",
    title: "New Quiz Available!",
    message: "A new JavaScript quiz has been added. Test your skills now!",
    icon: "bell",
  },
  {
    id: "2",
    title: "Achievement Unlocked!",
    message: "You reached Level 3 — Keep up the great work!",
    icon: "trophy",
  },
  {
    id: "3",
    title: "Daily Reminder",
    message: "Don’t forget to complete your daily challenge today!",
    icon: "clock",
  },
];

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Avatar.Icon
          icon={item.icon}
          size={48}
          style={styles.icon}
          color="#000"
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
     // Dark background
    padding: 16,
  },
  header: {
    color: "#FFD300", // Bee gold
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: "#1a1a1a",
    marginBottom: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FFD300",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#FFD300",
    marginRight: 16,
  },
  title: {
    color: "#FFD300",
    fontSize: 18,
    fontWeight: "600",
  },
  message: {
    color: "#ccc",
    fontSize: 14,
  },
});