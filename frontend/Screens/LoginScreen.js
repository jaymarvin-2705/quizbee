import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
export default function LoginScreen() {
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
          {/* Logo Section */}
          <Image
            source={require('../assets/HoneyBee.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Login Card */}
          <View style={styles.card}>
            <Text style={styles.loginText}>LOGIN</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#555"
              keyboardType="email-address"
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

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={styles.signUpPrompt}>
              Don’t have an account? Sign Up
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
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
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
  loginText: {
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
  signUpPrompt: {
    color: '#000',
    marginTop: 15,
  },
  signUpLink: {
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
  },
});
