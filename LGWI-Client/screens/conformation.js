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

//User - Querry based on Meter Number or Cedula

// RecieptID - check what the highest recieptID is and add 1 to it

// Balance - calculate the balance based on the water usage and rate from community

// Date - get the current date based on their device date
function getDateTime() {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
}


export default function ConformationScreen({ navigation, route }) {
  // Data from the previous screen
  const { inputData } = route.params;

  // Data to be displayed
  const conformationData = [
    {
      receiptID: '#06',
      balance: '8.60',
      date: '16/4/24',
      chargeType: 'Water Usage',

      meternumber: '66',
      name: 'Peter',
      surname: 'Parker',
      cedula: '123214',
      sector: 'South East',
      phoneNumber: '1234569',
      email: 'pparker@avenge.com',
      status: 'Active',
      category: 'Residential',
    },
  ];

  // Translation
  const { t } = useTranslation();
  // Render
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          {conformationData.map(({ receiptID, balance, date, chargeType, meternumber, name, surname, cedula, sector, phoneNumber, email, status, category }, index) => {
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
                <View style={styles.details} >
                  <Text style={styles.detailsTitle}>{t('screens.conformation.text.userDetails')}</Text>
                  {/* Meter Number */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.conformation.text.meternumber')}</Text>
                    <Text style={styles.detailsValue}>{meternumber}</Text>
                  </View>
                  {/* First Name */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.conformation.text.name')}</Text>
                    <Text style={styles.detailsValue}>{name}</Text>
                  </View>
                  {/* Last Name */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.conformation.text.surname')}</Text>
                    <Text style={styles.detailsValue}>{surname}</Text>
                  </View>
                  {/* ID Number */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.conformation.text.idNumber')}</Text>
                    <Text style={styles.detailsValue}>{cedula}</Text>
                  </View>
                  {/* Sector */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.conformation.text.sector')}</Text>
                    <Text style={styles.detailsValue}>{sector}</Text>
                  </View>
                  {/* Phone Number */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.conformation.text.phoneNumber')}</Text>
                    <Text style={styles.detailsValue}>{phoneNumber}</Text>
                  </View>
                  {/* Email */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.conformation.text.email')}</Text>
                    <Text style={styles.detailsValue}>{email}</Text>
                  </View>
                  {/* Status */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.conformation.text.status')}</Text>
                    <Text style={styles.detailsValue}>{status}</Text>
                  </View>
                  {/* Category */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.conformation.text.category')}</Text>
                    <Text style={styles.detailsValue}>{category}</Text>
                  </View>
                </View>
                <View style={styles.spacing} />
                <View style={styles.overlay}>
                  <TouchableOpacity
                    onPress={() => {
                      //go to UserView based on Meter Number
                      navigation.navigate('Loading');
                      setTimeout(() => {
                        navigation.navigate('UserView', { receiptID, balance, date, chargeType, meternumber, name, surname, cedula, sector, phoneNumber, email, status, category });
                      }, 1000);
                    }}>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>{t('screens.conformation.text.confirmChange')}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('tabsHome', {});
                    }}>
                    <View style={styles.btnSecondary}>
                      <Text style={styles.btnSecondaryText}>{t('screens.conformation.text.cancel')}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            );
          })}
        </View>
      </SafeAreaView>
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
  overlay: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
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
  receiptLogo: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginBottom: 12,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiptTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 2,
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
    color: '#8338ec',
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
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#02C3BD',
    borderColor: '#02C3BD',
    marginBottom: 12,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#02C3BD',
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#02C3BD',
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