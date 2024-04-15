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
      meternumber: 'fromUser',
      name: 'fromUser',
      surname: 'fromUser',
      idNumber: 'fromUser',
      sector: 'fromUser',
      phoneNumber: 'fromUser',
      email: 'fromUser',
      status: 'fromUser',
      category: 'fromUser',
    },
  ];

  // Receipt Data
  const receiptData = [
    {
      receiptID: 'function',
      date: 'function',
      amount: 'function',
    },
  ];

  // Translation
  const { t } = useTranslation();
  // State
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.detailsTitle}>{t('screens.userView.title')}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddUser', {})}
              style={styles.addBtn}>
              <Text style={styles.addUser}>{t('screens.userView.text.edit')}
              </Text>

            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.receipt}
            showsVerticalScrollIndicator={false}>

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

                  {/* Add a clickable container with reciept info with lower divider. Must be able to show past 10 reciepts. */}
                  {/* Receipt */}
                  <View style={styles.divider}>
                    <View style={styles.dividerInset} />
                  </View>

                  <View style={styles.details} key={index}>
                    <Text style={styles.detailsTitle}>{t('screens.userView.text.receipt')}</Text>
                    <TouchableOpacity onPress={() => {
                      // generate a pdf of the reciept with all the details and the option to email to customer
                    }}>
                      {/* Reciept Info */}
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>{t('screens.userView.text.receiptID')}</Text>
                        <Text style={styles.detailsValue}>{meternumber}</Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>{t('screens.userView.text.date')}</Text>
                        <Text style={styles.detailsValue}>{meternumber}</Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>{t('screens.userView.text.amount')}</Text>
                        <Text style={styles.detailsValue}>{meternumber}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.pastReciept}>
                    <TouchableOpacity>
                      <View style={styles.receipt}>
                      </View>
                    </TouchableOpacity>

                  </View>
                  <View style={styles.divider}>
                    <View style={styles.dividerInset} />
                  </View>

                </View>
              );
            })}


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
            navigation.goBack();
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
});