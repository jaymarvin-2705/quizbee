import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
export default function WelcomeScreen() {
     const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Buttons */}
      <View style={styles.topButtons}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Logo and Text */}
      <View style={styles.content}>
        <Image
          source={require('../assets/HoneyBee.png')} // replace with your logo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    gap: 10,
    marginBottom:80

  },
  loginButton: {
    backgroundColor: '#C7A008', // gold shade
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  signUpButton: {
    backgroundColor: '#D32F2F', // red shade
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  loginText: {
    color: '#ffffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom:200
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  title: {
    color: '#FFD700',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 1,
  },
});
