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
import FeatherIcon from 'react-native-vector-icons/Feather';


export default function UserView({ navigation, route }) {

  const { name, surname, meterNumber, cedula, tag, date, sector, phoneNumber, email, status, category } = route.params;

  // get the reciepts for the user
  function getReceipts(meterID) {
    let receipts = [];
    for (let i = 3; i < csvArray.length; i++) {
      if (csvArray[i][16].trimRight() == meterID) {
        receipts.push({
          receiptID: csvArray[i][15],
          date: csvArray[i][19],
          amount: csvArray[i][20],
          tag: csvArray[i][21],
        });
      }
    }
    return receipts;
  }

  const receiptData = getReceipts(meterNumber);

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
              onPress={() => navigation.navigate('EditUser', { name, surname, meterNumber, cedula, tag, date, sector, phoneNumber, email, status, category })}
              style={styles.addBtn}>
              <Text style={styles.addUser}>{t('screens.userView.text.edit')}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Body Content */}
          <ScrollView
            contentContainerStyle={styles.receipt}
            showsVerticalScrollIndicator={false}>

            <View style={styles.card1}>

              <View style={styles.card}>
                <View style={styles.cardBody}>
                  <Text style={styles.cardname}>{name} {surname}</Text>
                  <View style={styles.cardRow}>
                    <View style={styles.cardRowItem}>
                      <Text style={styles.cardRowItemText}>{meterNumber}</Text>
                    </View>
                    <Text style={styles.cardRowDivider}>·</Text>
                    <View style={styles.cardRowItem}>
                      <Text style={styles.cardRowItemText}>#{cedula}</Text>
                    </View>
                    <Text style={styles.cardRowDivider}>·</Text>
                    <View style={styles.cardRowItem}>
                      <Text style={styles.cardRowItemText}>{date}</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Payment Status for current system how mcuh $$ paid and unpaid*/}
              <View style={styles.statsRow}>

                <View style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="dollar-sign" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemLabelGreen}>{t('screens.dashboard.text.paid')}</Text>
                    <Text style={styles.statsItemValue}>$0.00</Text>
                  </View>
                </View>
                <View style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="dollar-sign" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemLabelRed}>{t('screens.dashboard.text.unpaid')}</Text>
                    <Text style={styles.statsItemValue}>$50.00</Text>
                  </View>
                </View>
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

            <View style={styles.divider}>
              <View style={styles.dividerInset} />
            </View>
            <View style={styles.details}>
              <Text style={styles.detailsTitle}>{t('screens.userView.text.receipt')}</Text>


              {/* Reciept Info */}
              {receiptData.map(({ receiptID, date, amount, tag }, i) => {
                return (
                  <View style={styles.details} key={i}>
                    <TouchableOpacity style={styles.card1} onPress={() => {
                      // generate a pdf of the reciept with all the details and the option to email to customer
                      navigation.navigate('Receipt', { receiptID, date, amount, tag });
                    }}>
                      {/* Reciept Info */}
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>{t('screens.userView.text.receiptID')}</Text>
                        <Text style={styles.detailsValue}>#{receiptID}</Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>{t('screens.userView.text.date')}</Text>
                        <Text style={styles.detailsValue}>{date}</Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>{t('screens.userView.text.amount')}</Text>
                        <Text style={styles.detailsValue}>${amount}</Text>
                      </View>
                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Status</Text>
                        <Text style={styles.detailsValue}>{tag}</Text>
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
    padding: 8,
  },
  detailsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  detailsRow: {
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  detailsField: {
    fontSize: 19,
    lineHeight: 25,
    fontWeight: '500',
    color: '#8c8c8c',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  detailsValue: {
    fontSize: 17,
    lineHeight: 24,
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

  card1: {
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
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  cardRow1: {
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
    height: 72,
    paddingVertical: 0,
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
    fontSize: 22,
    lineHeight: 32,
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
    fontSize: 16,
    color: '#939393',
  },
  cardRowDivider: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#939393',
  },
  /** Stats */
  stats: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: -6,
  },
  statsItem: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginHorizontal: 6,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 3,
  },
  statsItemIcon: {
    backgroundColor: '#03312E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    marginRight: 8,
    borderRadius: 8,
  },
  statsItemLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#8e8e93',
    marginBottom: 2,
  },
  statsItemValue: {
    fontSize: 22,
    fontWeight: '600',
    color: '#081730',
  },
  statsItemLabelGreen: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 2
  },
  statsItemLabelRed: {
    fontSize: 18,
    fontWeight: '700',
    color: '#C62828',
    marginBottom: 2
  },


});