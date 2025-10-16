import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MainScreen from './MainScreen'
import NotificationScreen from "./NotificationScreen";
import LeaderboardScreen from "./LeaderboardScreen";
import ProfileScreen from "./ProfileScreen";
export default function HomeScreen() {
  const [activePage, setActivePage] = useState("Home");

  // Simulate pages
  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return (
          <MainScreen/>
        );
      case "Stats":
        return (
          <LeaderboardScreen/>
        );
      case "Notification":
        return (
          <NotificationScreen/>
        );
      case "Profile":
        return (
          <ProfileScreen/>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Active Page */}
      <View style={styles.contentContainer}>{renderPage()}</View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[styles.navItem, activePage === "Stats" && styles.activeTab]}
          onPress={() => setActivePage("Stats")}
        >
          <Ionicons
            name="bar-chart"
            size={24}
            color={activePage === "Stats" ? "#fff" : "#000"}
          />
          <Text
            style={[
              styles.navText,
              { color: activePage === "Stats" ? "#fff" : "#000" },
            ]}
          >
            Leaderboard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activePage === "Home" && styles.activeTab]}
          onPress={() => setActivePage("Home")}
        >
          <Ionicons
            name="home"
            size={24}
            color={activePage === "Home" ? "#fff" : "#000"}
          />
          <Text
            style={[
              styles.navText,
              { color: activePage === "Home" ? "#fff" : "#000" },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navItem,
            activePage === "Notification" && styles.activeTab,
          ]}
          onPress={() => setActivePage("Notification")}
        >
          <Ionicons
            name="notifications"
            size={24}
            color={activePage === "Notification" ? "#fff" : "#000"}
          />
          <Text
            style={[
              styles.navText,
              { color: activePage === "Notification" ? "#fff" : "#000" },
            ]}
          >
            Notifications
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activePage === "Profile" && styles.activeTab]}
          onPress={() => setActivePage("Profile")}
        >
          <Ionicons
            name="person"
            size={24}
            color={activePage === "Profile" ? "#fff" : "#000"}
          />
          <Text
            style={[
              styles.navText,
              { color: activePage === "Profile" ? "#fff" : "#000" },
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 0, // keeps button visible above bottom nav
  },
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFD000",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 25,
    textAlign: "center",
  },
  startButton: {
    backgroundColor: "#E6A600",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  startText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  pageText: {
    color: "#FFD000",
    fontSize: 22,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFD000",
    height: 70,
    marginBottom:40
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#000",
  },
  navText: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: "600",
  },
});
