// userView.js page displays the user details and reciepts for the user. It also allows the user to add a charge to the user account.
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';


export default function UserView({ navigation }) {

  // User Details Data
  const userDetails = [
    {
      meternumber: '234966',
      name: 'Peter',
      surname: 'Parker',
      idNumber: '123214',
      sector: 'South East',
      phoneNumber: '666-666-6666',
      email: 'pparker@avenge.com',
      status: 'Active',
      category: 'Residential',
    },
  ];

  // Receipt Data
  const receiptData = [
    {
      receiptID: '06',
      date: '4/16/24',
      amount: '8.60',
    },
    {
      receiptID: '05',
      date: '4/16/24',
      amount: '20.00',
    },
    {
      receiptID: '02',
      date: '4/16/24',
      amount: '2.43',
    },

  ];

  // Translation
  const { t } = useTranslation();
  // State
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.detailsTitle}>{t('screens.userView.title')}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddUser', {})}
              style={styles.addBtn}>
              <Text style={styles.addUser}>{t('screens.userView.text.edit')}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Body Content */}
          <ScrollView
            contentContainerStyle={styles.receipt}
            showsVerticalScrollIndicator={false}>

            {/* User Details */}
            {userDetails.map(({ meternumber, name, surname, idNumber, sector, phoneNumber, email, status, category }, index) => {
              return (
                <View style={styles.details} key={index}>

                  {/* Meter Number */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.userView.text.meternumber')}</Text>
                    <Text style={styles.detailsValue}>{meternumber}</Text>
                  </View>
                  {/* First Name */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.userView.text.name')}</Text>
                    <Text style={styles.detailsValue}>{name}</Text>
                  </View>
                  {/* Last Name */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.userView.text.surname')}</Text>
                    <Text style={styles.detailsValue}>{surname}</Text>
                  </View>
                  {/* ID Number */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.userView.text.idNumber')}</Text>
                    <Text style={styles.detailsValue}>{idNumber}</Text>
                  </View>
                  {/* Sector */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.userView.text.sector')}</Text>
                    <Text style={styles.detailsValue}>{sector}</Text>
                  </View>
                  {/* Phone Number */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.userView.text.phoneNumber')}</Text>
                    <Text style={styles.detailsValue}>{phoneNumber}</Text>
                  </View>
                  {/* Email */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.userView.text.email')}</Text>
                    <Text style={styles.detailsValue}>{email}</Text>
                  </View>
                  {/* Status */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.userView.text.status')}</Text>
                    <Text style={styles.detailsValue}>{status}</Text>
                  </View>
                  {/* Category */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.userView.text.category')}</Text>
                    <Text style={styles.detailsValue}>{category}</Text>
                  </View>
                </View>
              );
            })}
            <View style={styles.divider}>
              <View style={styles.dividerInset} />
            </View>
            <View style={styles.details}>
              <Text style={styles.detailsTitle}>{t('screens.userView.text.receipt')}</Text>

              {/* Reciept Info */}
              {receiptData.map(({ receiptID, date, amount }, i) => {
                return (
                  <View style={styles.details} key={i}>
                    <TouchableOpacity style={styles.card} onPress={() => {
                      // generate a pdf of the reciept with all the details and the option to email to customer
                    }}>
                      {/* Reciept Info */}
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>{t('screens.userView.text.receiptID')}</Text>
                        <Text style={styles.detailsValue}>{receiptID}</Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>{t('screens.userView.text.date')}</Text>
                        <Text style={styles.detailsValue}>{date}</Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>{t('screens.userView.text.amount')}</Text>
                        <Text style={styles.detailsValue}>{amount}</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.divider}>
                      <View style={styles.dividerInset} />
                    </View>

                  </View>
                );
              })}
            </View>
            <View style={{ height: 120 }} />
          </ScrollView>

        </View>
      </SafeAreaView >

      {/* Buttons */}
      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddCharge', {});
          }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>{t('screens.userView.text.submit')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // navigate back to the previous page
            navigation.navigate('Users', {});
          }}>
          <View style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>{t('screens.userView.text.cancel')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View >


  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
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
    paddingBottom: 16,
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
  /** Divider */
  divider: {
    overflow: 'hidden',
    width: '100%',
    marginVertical: 8,
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
    fontSize: 22,
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
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '500',
    color: '#8c8c8c',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  detailsValue: {
    fontSize: 17,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
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
  pastReciept: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  addUser: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
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
  
  card: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 3,

  },

});