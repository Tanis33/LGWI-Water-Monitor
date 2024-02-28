import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const items = [
  {
    name: 'John Doe',
    systemID: '123214',
    gagueID: '123214',
    tag: 'unpaid',
    date: 'Mar 24, 2023',
  },
];

export default function Example() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>View Data</Text>

          <Text style={styles.subtitle}>View water meter reading and click to view details</Text>
        </View>

        <View style={styles.list}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <View style={styles.itemImage}>
                
              </View>

              <View style={styles.itemContent}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDate}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}