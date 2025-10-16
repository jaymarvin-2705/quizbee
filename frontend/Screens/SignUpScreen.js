import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Section */}
      <Image
        source={require('../assets/HoneyBee.png')} // replace with your logo path
        style={styles.logo}
      />
      <Text style={styles.title}>QUIZ BEE</Text>
      <Text style={styles.subtitle}>LEARN PROGRAMMING WITH QUIZ BEE APP</Text>

      {/* Sign Up Card */}
      <View style={styles.card}>
        <Text style={styles.signUpText}>SIGN UP</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#555"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#555"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#555"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    color: '#FFD700',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    padding: 20,
    width: '85%',
    alignItems: 'center',
    elevation: 5,
  },
  signUpText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#000',
    color: '#fff',
    width: '100%',
    borderRadius: 20,
    padding: 12,
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#D32F2F',
    borderRadius: 25,
    paddingVertical: 12,
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    color: '#000',
    marginTop: 15,
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
  },
});