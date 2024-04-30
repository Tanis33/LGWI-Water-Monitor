// conformation.js page for confirming of the cost and the calculation of the cost based on water usage
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
import { useTranslation } from 'react-i18next';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { globalStyles } from '../styles/globalStyles';

//User Details Functions
function getName(inx) {
  return (global.csvArray[inx + 2][1]).trimRight();
}

function getSurname(inx) {
  return (global.csvArray[inx + 2][2]).trimRight();
}

function getmeterNumber(inx) {
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

// RecieptID - check what the highest recieptID is and add 1 to it

// Balance - calculate the balance based on the water usage and rate from community

// Date - get the current date based on their device date
function getDateTime() {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
}


export default function ConformationScreen({ navigation, route }) {
  // Data from the previous screen
  const { inputData, balance } = route.params;

  // Data to be displayed
  let i = 3;
  let conformationData = [
    {
      receiptID: '#06',
      balance: balance,
      date: '23/4/24',
      chargeType: 'Water Usage',

      name: 'James',
      surname: 'Smith',
      meterNumber: '62',
      cedula: '21321412',
      tag: 'paid',
      date: '4/13/24',

      sector: 'North East',
      phoneNumber: '123.456.3456',
      email: 'jsm@yahoo.com',
      status: 'Active',
      category: 'Residential',
    },
  ];

  // get the reciepts for the user
  function getData(meterID) {
    let userData = [];
    for (let i = 3; i < csvArray.length; i++) {
      if (csvArray[i][0].trimRight() == meterID) {
        userData.push({
          receiptID: '#06',
          balance: balance,
          date: '23/4/24',
          chargeType: 'Water Usage',

          meterNumber: getmeterNumber(i),
          name: getName(i),
          surname: getSurname(i),
          cedula: getCedula(i),
          sector: getsector(i),
          phoneNumber: getphoneNumber(i),
          email: getemail(i),
          status: getstatus(i),
          category: getcategory(i),
        });
      }
    }
    return userData;
  }

  const userDetails = getData({ meterNumber: inputData.meterNumber });

  // Translation
  const { t } = useTranslation();
  // Render
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          {conformationData.map(({ receiptID, balance, date, chargeType, meterNumber, name, surname, cedula, sector, phoneNumber, email, status, category }, index) => {
            return (
              <ScrollView
                contentContainerStyle={styles.receipt}
                showsVerticalScrollIndicator={false}
                key={index}>

                <Text style={styles.receiptSubtitle}>{t('screens.conformation.text.invoice')} {receiptID}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.receiptSubtitle}>Water Reading {inputData.usageAmount} m</Text>
                  <Text style={styles.volumeDescriptor}>3</Text>
                </View>
                <View style={styles.receiptPrice}>
                  <Text style={styles.receiptPriceText}>${balance}</Text>
                </View>

                <Text style={styles.receiptDescription}>
                  {chargeType} {date}
                </Text>

                <View style={styles.divider}>
                  <View style={styles.dividerInset} />
                </View>
                <View style={globalStyles.details}>
                  <View style={globalStyles.detailsBody}>
                    <Text style={globalStyles.detailsName}>{name} {surname}</Text>
                    <View style={globalStyles.detailsRow}>
                      <View style={globalStyles.detailsRowItem}>
                        <Text style={globalStyles.detailsRowItemText}>{meterNumber}</Text>
                      </View>
                      <Text style={globalStyles.detailsRowDivider}>·</Text>
                      <View style={globalStyles.detailsRowItem}>
                        <Text style={globalStyles.detailsRowItemText}>#{cedula}</Text>
                      </View>

                    </View>
                    <View style={globalStyles.detailsRow}>
                      <View style={globalStyles.detailsRowItem}>
                        <Text style={globalStyles.detailsRowItemText}>{category}</Text>
                      </View>
                      <Text style={globalStyles.detailsRowDivider}>·</Text>
                      <View style={globalStyles.detailsRowItem}>
                        <Text style={globalStyles.detailsRowItemText}>{status}</Text>
                      </View>
                      <Text style={globalStyles.detailsRowDivider}>·</Text>
                      <View style={globalStyles.detailsRowItem}>
                        <Text style={globalStyles.detailsRowItemText}>{sector}</Text>
                      </View>

                    </View>
                    <View style={globalStyles.detailsRow}>
                      <View style={globalStyles.detailsRowItem}>
                        <Text style={globalStyles.detailsRowItemText}>{phoneNumber}</Text>
                      </View>
                      <Text style={globalStyles.detailsRowDivider}>·</Text>
                      <View style={globalStyles.detailsRowItem}>
                        <Text style={globalStyles.detailsRowItemText}>{email}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>

            );
          })}
        </View>
      </SafeAreaView>
      <View style={globalStyles.overlay}>
        <TouchableOpacity
          onPress={() => {
            //go to UserView based on Meter Number
            navigation.navigate('UserView', { receiptID, balance, date, chargeType, meterNumber, name, surname, cedula, sector, phoneNumber, email, status, category });
          }}>
          <View style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>{t('screens.conformation.text.confirmChange')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('tabsHome', {});
          }}>
          <View style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>{t('screens.conformation.text.cancel')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  /** Receipt */
  receipt: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 140,
  },
  receiptSubtitle: {
    fontSize: 18,
    lineHeight: 20,
    color: '#818181',
    marginBottom: 12,
  },
  receiptPrice: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 6,
  },
  receiptPriceText: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: 'bold',
    letterSpacing: 0.35,
    color: 'red',
  },
  receiptDescription: {
    fontSize: 18,
    lineHeight: 22,
    color: '#818181',
    textAlign: 'center',
    marginBottom: 12,
  },
  /** Avatar */
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  /** Divider */
  divider: {
    overflow: 'hidden',
    width: '100%',
    marginVertical: 24,
  },
  dividerInset: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#e5e5e5',
    borderStyle: 'dashed',
    marginTop: -2,
  },
  /** Details */
  details: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  detailsRow: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  detailsField: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#8c8c8c',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  detailsValue: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    color: '#444',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'right',
  },
  spacing: {
    marginBottom: 120,
  },
  volumeDescriptor: {
    fontSize: 14,
    color: '#818181',
    marginBottom: -10,
    fontWeight: '500',

  },
});