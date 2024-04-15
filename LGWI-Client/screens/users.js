// users.js page displays a list of users and their information. It also allows the user to add a new user.
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';

export default function Users({ navigation }) {
  // Dummy Data
  const usersData = [
    {
      name: 'John',
      surname: 'Doe',
      meterNumber: '123214',
      cedula: '123214',
      tag: 'unpaid',
      date: '4/13/24',
    },
    {
      name: 'Johny',
      surname: 'Doe',
      meterNumber: '123214',
      cedula: '21321412',
      tag: 'paid',
      date: '4/13/24',
    },
    {
      name: 'John',
      surname: 'Doe',
      meterNumber: '123214',
      cedula: '21321312',
      tag: 'paid',
      date: '4/13/24',
    },
    {
      name: 'John',
      surname: 'Doe',
      meterNumber: '123214',
      cedula: '123214',
      tag: 'unpaid',
      date: '4/13/24',
    },
  ];
  // Translation
  const { t } = useTranslation();
  // Render
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{t('screens.users.title')}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddUser', {})}
            style={styles.addBtn}>
            <Text style={styles.addUser}>{t('screens.users.text.addUser')}
            </Text>
            <FeatherIcon color="#000" name="plus" size={30} />
          </TouchableOpacity>
        </View>
        {/* Filter and Search Option */}
{/*     <Text style={styles.filter}>{t('screens.users.text.filter')}</Text>
        <Text style={styles.filter}>{t('screens.users.text.search')}</Text>
         */}

        {/* Users List */}
        <ScrollView contentContainerStyle={styles.content}>
          {usersData.map(({ name, surname, meterNumber, cedula, tag, date }, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('UserView', {})}>
                <View style={styles.card}>
                  <View style={styles.cardBody}>
                    <Text style={styles.cardTag}>{tag}</Text>
                    <Text style={styles.cardname}>{name} {surname}</Text>
                    <View style={styles.cardRow}>
                      <View style={styles.cardRowItem}>
                        <Text style={styles.cardRowItemText}>{meterNumber}</Text>
                      </View>
                      <Text style={styles.cardRowDivider}>·</Text>
                      <View style={styles.cardRowItem}>
                        <Text style={styles.cardRowItemText}>{cedula}</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  addUser: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
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
  filter: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },

});