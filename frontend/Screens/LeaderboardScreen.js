import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, StatusBar } from "react-native";

export default function LeaderboardScreen() {
  const [players, setPlayers] = useState([]);

  // 🧠 Sample data (replace later with database or Firebase)
  useEffect(() => {
    const quizPlayers = [
      { id: "1", name: "Jenny", score: 95 },
      { id: "2", name: "Mark", score: 90 },
      { id: "3", name: "Ella", score: 88 },
      { id: "4", name: "Liam", score: 80 },
      { id: "5", name: "Ava", score: 75 },
      { id: "6", name: "Noah", score: 70 },
    ];

    // Sort players by score (highest first)
    const sortedPlayers = quizPlayers.sort((a, b) => b.score - a.score);
    setPlayers(sortedPlayers);
  }, []);

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.item,
        index === 0 && styles.first,
        index === 1 && styles.second,
        index === 2 && styles.third,
      ]}
    >
      <Text style={styles.rank}>{index + 1}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>🏆 Quiz Bee Leaderboard</Text>
      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <Text style={styles.footer}>Good luck, quiz masters! 🧠</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1321",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 25,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1D2D44",
    borderRadius: 15,
    padding: 15,
    marginVertical: 6,
  },
  first: {
    backgroundColor: "#FFD70033",
    borderWidth: 1,
    borderColor: "#FFD700",
  },
  second: {
    backgroundColor: "#C0C0C033",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  third: {
    backgroundColor: "#CD7F3233",
    borderWidth: 1,
    borderColor: "#CD7F32",
  },
  rank: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
  },
  name: {
    flex: 1,
    fontSize: 18,
    color: "#FFFFFF",
    marginLeft: 10,
  },
  score: {
    fontSize: 18,
    color: "#00BFFF",
    fontWeight: "bold",
  },
  footer: {
    textAlign: "center",
    color: "#ccc",
    marginTop: 10,
    fontStyle: "italic",
  },
});