import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 }}>Login</Text>

        <TextInput
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
            width: '80%',
          }}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 10,
            padding: 10,
            marginBottom: 20,
            width: '80%',
          }}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: 15,
            borderRadius: 10,
            width: '80%',
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>

        <Text style={{ color: 'white', marginTop: 10, textAlign: 'center' }}>Forgot your password?</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <Text style={{ color: 'white' }}>Or connect with:</Text>
          {/* Add social login buttons here */}
        </View>

        <Text style={{ color: 'white', marginTop: 10, textAlign: 'center' }}>Don't have an account? Sign up</Text>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;