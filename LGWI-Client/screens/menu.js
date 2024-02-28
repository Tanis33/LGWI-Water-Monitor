
// Import necessary modules
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


// Define the MenuScreen component
export default function MenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <View style={styles.cardStyle}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Current System:</Text>
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}>SYS212</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: '90%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 15 // Move the card down by 10 units
  },

});