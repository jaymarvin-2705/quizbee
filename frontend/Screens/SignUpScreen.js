import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <Image
            source={require('../assets/HoneyBee.png')}
            style={styles.logo}
          />

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

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Login")}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.loginText} onPress={()=>navigation.navigate("Login")}>
              Already have an account? Login
            </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop:0,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    padding: 20,
    width: '85%',
    alignItems: 'center',
    elevation: 5,
    marginBottom: 200,
  },
  signUpText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#000',
    color: '#ffffffff',
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
