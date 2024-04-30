import React, { useState } from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import { globalStyles } from '../styles/globalStyles';

export default function Receipt({ navigation, route }) {


  // Translation
  const { t } = useTranslation();

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
  // Render
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Reciept</Text>
        {/* Reciept Info */}
        {testData.map(({ receiptID, date, amount, tag }, i) => {
          return (
            <View style={styles.details} key={i}>
              <TouchableOpacity style={styles.card} onPress={() => {
              // generate PDF
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

            </View>
          );
        })}
      </View>

      <View style={globalStyles.overlay}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack('', {});
          }}>
          <View style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>{t('screens.addUser.text.cancel')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  /** Form */
  form: {
    paddingVertical: 8,
  },
  formAction: {
    marginVertical: 8,
  },

  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#02C3BD',
    margin: 8,
  },
  /** Button */
  btn: {
    backgroundColor: '#02C3BD',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  /** From Menu Screen */
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
  },
  statsItemLabel: {
    fontSize: 18,
    color: 'black',
    marginBottom: 2,
    fontWeight: 'bold',
    marginTop: -6,
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
  details: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 8,
  },
});
