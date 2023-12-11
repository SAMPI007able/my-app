import React, { useState } from 'react';
import { View, Image, StyleSheet,TouchableOpacity, Alert, Dimensions, Platform } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import useAuth from '../utility/hooks/useAuth'
import logo from '../assets/iconsvg/logo.png'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('admin@one.com');
  const [password, setPassword] = useState('1234');
  const authManager = useAuth()
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    // Add your authentication logic here
    if(email && password) {
      try {
        setLoading(true)
        const res$ = await authManager.isValidUser({email, password})
        const res = await res$.json()        
        if('user' in res) {
          switch(res.user.type) {
            case 0: {
              navigation.navigate('AdminDashboard')
              break
            }
            case 1: {
              navigation.navigate('SpocDashboard')
              break
            }
          }
        }
        setLoading(false)
      } catch(e) {
        setLoading(false)
      }
    } else {
      Alert.alert('Login Response', 'Please enter email Id and password inputs', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  const handleForgotPassword = () => {
    // Add your logic for handling forgotten passwords
    console.log('Forgot Password pressed');
  };

  return (
    <View style={styles.container}>      
      <View style={styles.loginView}>
        <Image
          resizeMethod="auto"
          style={styles.logo}
          source={logo}
        ></Image>

        {/* <Text style={styles.title} variant="titleLarge">Login</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Email ID"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          right={<TextInput.Icon icon="email" />}
          disabled={loading}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          right={<TextInput.Icon icon="key" />}
          disabled={loading}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        <Button loading={loading} disabled={loading} mode="contained" title="Login" onPress={handleLogin}>
          Login
        </Button>
      </View>
      <View>
      <Text variant="labelSmall">
        © {new Date().getFullYear()} My Application Name. All rights reserved.
      </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginView: {
    flex: 1,
    justifyContent: 'center',
    width: (() => {
      if(Platform.OS === 'web') {
        return '50%'
      } else {
        return '100%'
      }
    })()
  },
  title: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    width: '100%'
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: (() => {
      if(Platform.OS === 'web') {
        return '60%'
      } else {
        return Dimensions.get('window').width - 40
      }
    })(),
    height: (() => {
      if(Platform.OS === 'web') {
        return '40%'
      } else {
        return '30%'
      }
    })(),
    marginBottom: 20
  }
});

export default LoginScreen;
