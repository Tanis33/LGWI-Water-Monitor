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
import { globalStyles } from '../styles/globalStyles';


function getName(inx) {
  return (global.csvArray[inx + 2][1]).trimRight();
}

function getSurname(inx) {
  return (global.csvArray[inx + 2][2]).trimRight();
}

function getMeterNumber(inx) {
  return (global.csvArray[inx + 2][0]).trimRight();
}

function getCedula(inx) {
  return (global.csvArray[inx + 2][3]).trimRight();
}

function getsector(inx) {
  return (global.csvArray[inx + 2][4]).trimRight();
}

function getphoneNumber(inx) {
  return (global.csvArray[inx + 2][5]).trimRight();
}

function getemail(inx) {
  return (global.csvArray[inx + 2][6]).trimRight();
}

function getstatus(inx) {
  return (global.csvArray[inx + 2][7]).trimRight();
}

function getcategory(inx) {
  return (global.csvArray[inx + 2][8]).trimRight();
}


function getPaidUnpaid(inx) {
  for (let i = 3; i < csvArray.length; i++) {
    if (csvArray[i][16].trimRight() == getMeterNumber(inx).trimRight()) {
      if (csvArray[i][21].trimRight() == "Unpaid") {
        return "Unpaid";
      }
    }
  }
  return "Paid";
}

function getDate(inx) {

  // first, look for dates of unpaid receipts
  for (let i = 3; i < csvArray.length; i++) {
    if (csvArray[i][16].trimRight() == getMeterNumber(inx).trimRight()) {
      if (csvArray[i][21].trimRight() == "Unpaid") {
        return csvArray[i][19].trimRight();
      }
    }
  }

  // if no unpaid reciepts are found, look for paid ones
  for (let i = 3; i < csvArray.length; i++) {
    if (csvArray[i][16].trimRight() == getMeterNumber(inx).trimRight()) {
      if (csvArray[i][21].trimRight() == "Paid") {
        return csvArray[i][19].trimRight();
      }
    }
  }
}


export default function Users({ navigation }) {
  
  // User Data
  let testData = [];

  //create a new object for every user in the "users" section of the table
  //Note: this has no max size limit.Todo: add upper limit for size

  for (let i = 1; i < csvArray.length - 2; i++) {
    testData.push({
        name: getName(i),
        surname: getSurname(i),
        meterNumber: getMeterNumber(i),
        cedula: getCedula(i),
        tag: getPaidUnpaid(i), 
        date: getDate(i),

        sector: getsector(i),
        phoneNumber: getphoneNumber(i),
        email: getemail(i),
        status: getstatus(i),
        category: getcategory(i),
      });
    }
  
  // Translation
  const { t } = useTranslation();
  // Render
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={globalStyles.titleText}>{t('screens.users.title')}</Text>
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
          {testData.map(({ name, surname, meterNumber, cedula, tag, date, sector, phoneNumber, email, status, category }, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('UserView', { name, surname, meterNumber, cedula, tag, date, sector, phoneNumber, email, status, category })}>
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
    marginBottom: 110,
    backgroundColor: '#f3f3f3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 3,
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
