import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  FeatherIcon,
  TextInput,
} from 'react-native';

const items = [
  {
    name: 'John Doe',
    systemID: '123214',
    gagueID: '123214',
    tag: 'unpaid',
    date: 'Mar 24, 2023',
  },
  {
    name: 'Johny Bravo',
    systemID: '123214',
    gagueID: '21321412',
    tag: 'paid',
    date: 'Mar 23, 2023',
  },
  {
    name: 'John Cena',
    systemID: '123214',
    gagueID: '21321312',
    tag: 'paid',
    date: 'Mar 28, 2023',
  },
  {
    name: 'John Doe',
    systemID: '123214',
    gagueID: '123214',
    tag: 'unpaid',
    date: 'Mar 24, 2023',
  },
  {
    name: 'Johny Bravo',
    systemID: '123214',
    gagueID: '21321412',
    tag: 'paid',
    date: 'Mar 23, 2023',
  },
  {
    name: 'John Cena',
    systemID: '123214',
    gagueID: '21321312',
    tag: 'paid',
    date: 'Mar 28, 2023',
  },
  {
    name: 'John Doe',
    systemID: '123214',
    gagueID: '123214',
    tag: 'unpaid',
    date: 'Mar 24, 2023',
  },
  {
    name: 'Johny Bravo',
    systemID: '123214',
    gagueID: '21321412',
    tag: 'paid',
    date: 'Mar 23, 2023',
  },
  {
    name: 'John Cena',
    systemID: '123214',
    gagueID: '21321312',
    tag: 'paid',
    date: 'Mar 28, 2023',
  },
];

export default function Users({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>System Users</Text>
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.name}>Filter</Text>
          <Text style={styles.name}>Search</Text>

          {items.map(({ name, systemID, gagueID, tag, date }, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('AccountView', {})}>
                <View style={styles.card}>
                  <View style={styles.cardBody}>
                    <Text style={styles.cardTag}>{tag}</Text>

                    <Text style={styles.cardname}>{name}</Text>

                    <View style={styles.cardRow}>
                      <View style={styles.cardRowItem}>
                        <Text style={styles.cardRowItemText}>{systemID}</Text>
                      </View>
                      <Text style={styles.cardRowDivider}>·</Text>
                      <View style={styles.cardRowItem}>
                        <Text style={styles.cardRowItemText}>{gagueID}</Text>
                      </View>

                      <Text style={styles.cardRowDivider}>·</Text>

                      <View style={styles.cardRowItem}>
                        <Text style={styles.cardRowItemText}>{date}</Text>
                      </View>
                    </View>

                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 160,
    backgroundColor: '#f3f3f3',
  },
  name: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Card */
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 12,
    padding: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderColor: 'black',
    backgroundColor: '#fff',
  },

  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  cardTag: {
    fontWeight: '500',
    fontSize: 12,
    color: '#939393',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  cardname: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: '#000',
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -8,
    marginBottom: 'auto',
  },
  cardRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    borderRightWidth: 1,
    borderColor: 'transparent',
  },
  cardRowItemText: {
    fontWeight: '400',
    fontSize: 13,
    color: '#939393',
  },
  cardRowDivider: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#939393',
  },
  content: {
    paddingHorizontal: 0,
  },
});