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
import { globalStyles } from '../styles/globalStyles';


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

  const testData = [
    {
      receiptID: "07",
      date: "2024-04-23",
      amount: "7.00",
      tag: "Unpaid",
    },
    {
      receiptID: "02",
      date: "2024-03-01",
      amount: "10.00",
      tag: "Paid",
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
            <Text style={globalStyles.titleText}>{t('screens.userView.title')}</Text>
          </View>

          {/* Body Content */}
          <ScrollView
            contentContainerStyle={styles.receipt}
            showsVerticalScrollIndicator={false}>

            <View style={styles.card}>

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

              {/* Payment Status for current system how mcuh $$ paid and unpaid*/}
              <View style={styles.statsRow}>

                <View style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="dollar-sign" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemLabelGreen}>{t('screens.dashboard.text.paid')}</Text>
                    <Text style={styles.statsItemValue}>$10.00</Text>
                  </View>
                </View>
                <View style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="dollar-sign" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemLabelRed}>{t('screens.dashboard.text.unpaid')}</Text>
                    <Text style={styles.statsItemValue}>$7.00</Text>
                  </View>
                </View>
              </View>

              <View style={styles.statsRow}>
                <TouchableOpacity style={styles.statsItem}onPress={() => {
                  //go to EditUser
                  navigation.navigate('Receipt', { meterNumber });
                }}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="folder" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemValue}>Reciepts</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="credit-card" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemValue}>Pay</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.statsRow}>
                <TouchableOpacity style={styles.statsItem}onPress={() => {
                  //go to EditUser
                  navigation.navigate('AddCharge', {  });
                }}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="plus" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemValue}>Add</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.statsItem} onPress={() => {
                  //go to EditUser
                  navigation.navigate('EditUser', { meterNumber, name, surname, cedula, sector, phoneNumber, email, status, category });
                }}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="edit-2" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemValue}>Edit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.divider}>
              <View style={styles.dividerInset} />
            </View>
            <View style={styles.details}>
              <Text style={styles.detailsTitle}>{t('screens.userView.text.receipt')}</Text>


              {/* Reciept Info */}
              {testData.map(({ receiptID, date, amount, tag }, i) => {
                return (
                  <View style={styles.details} key={i}>
                    <TouchableOpacity style={styles.card} onPress={() => {
                      // generate a pdf of the reciept with all the details and the option to email to customer
                      navigation.navigate('Receipt', { receiptID, date, amount, tag });
                    }}>
                      {/* Reciept Info */}
                      <View style={globalStyles.detailsBody}>
                        <View style={globalStyles.detailsRow}>
                          <Text style={globalStyles.detailsName}>Receipt #{receiptID} </Text>
                          <Text style={globalStyles.detailsNameRight}>{date}</Text>
                        </View>

                        <View style={globalStyles.detailsRow}>
                          <View style={globalStyles.detailsRowItem}>
                            <Text style={globalStyles.detailsRowItemText}>{tag}</Text>
                          </View>
                          <Text style={globalStyles.detailsRowDivider}>·</Text>
                          <View style={globalStyles.detailsRowItem}>
                            <Text style={globalStyles.detailsRowItemText}>${amount}</Text>
                          </View>
                        </View>

                        <View style={globalStyles.detailsRow}>
                          <View style={globalStyles.detailsRowItem}>
                            <Text style={globalStyles.detailsRowItemText}>Description</Text>
                          </View>
                        </View>
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
            // navigate back to the previous page
            navigation.navigate('Users', {});
          }}>
          <View style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>{t('screens.userView.text.cancel')}</Text>
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

  pastReciept: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
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
