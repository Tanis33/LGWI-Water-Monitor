import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from '../screens/menu';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Created by: Jacob Westra and Ben Tanis</Text>
      <Text style={styles.text}>©Calvin University</Text>
      <Text style={styles.text}>Data to go here</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('tabsHome', {screen: 'Menu'})}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontStyle: 'italic',
    fontSize: 13,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'darkgrey',
    padding: 15,
    borderRadius: 5,
    width: '30%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


