/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme, StatusBar, StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Registro from './src/ui/screens/Registro.js';
import LoginScreen from './src/ui/screens/LoginScreen.js';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? '#4F3680' : '#8258D1';
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <LoginScreen />
    </SafeAreaView>
  );
}
