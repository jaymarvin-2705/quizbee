import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProfileView = () => {
  return (
    <LinearGradient
      colors={["#000000", "#1a1a1a"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.header}>👤 My Profile</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
            style={styles.avatar}
          />
          <View style={styles.avatarGlow}></View>
        </View>

        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>

        <View style={styles.divider} />

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Quizzes</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>87%</Text>
            <Text style={styles.statLabel}>Avg. Score</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>#5</Text>
            <Text style={styles.statLabel}>Rank</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <LinearGradient
            colors={["#FFD700", "#E5BE01"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButton}
          >
            <Text style={styles.editText}>Edit Profile</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFD700",
    marginBottom: 20,
    letterSpacing: 1.2,
  },
  profileCard: {
    backgroundColor: "rgba(26, 26, 26, 0.98)",
    borderRadius: 25,
    alignItems: "center",
    width: "90%",
    padding: 30,
    borderWidth: 1,
    borderColor: "#FFD700",
    shadowColor: "#FFD700",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#FFD700",
    zIndex: 2,
  },
  avatarGlow: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(255,215,0,0.08)",
    top: -10,
    left: -10,
    zIndex: 1,
  },
  name: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "700",
    marginTop: 5,
  },
  email: {
    color: "#bbb",
    fontSize: 14,
    marginBottom: 20,
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "rgba(255,215,0,0.3)",
    marginVertical: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 15,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 22,
    color: "#FFD700",
    fontWeight: "700",
  },
  statLabel: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 3,
  },
  editButton: {
    width: "80%",
    marginTop: 20,
  },
  gradientButton: {
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  editText: {
    color: "#0d0d0d",
    fontWeight: "800",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

export default ProfileView;
