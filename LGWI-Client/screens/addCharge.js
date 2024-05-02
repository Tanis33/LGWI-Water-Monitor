import React, { useState } from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import { globalStyles } from '../styles/globalStyles';

export default function AddCharge({ navigation }) {

  const {meterNumber} = route.params;

  const [receiptData, setForm] = useState({
    amount: '',
    chargeType: '',
    description: '',
  });

  const initialFormState = {
    amount: '',
    chargeType: '',
    description: '',
  };
  // Translation
  const { t } = useTranslation();
  // Render
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
      <View style={styles.container}>
        <Text style={styles.title}>{t('screens.addCharge.title')}</Text>
        <KeyboardAwareScrollView>
          <View style={styles.recpeitData}>
            {/* Input for adding Charge*/}
            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <View style={{ backgroundColor: 'white', width: '100%' }}>
                  <View style={{ flexDirection: 'row'}} />
                  <Text style={styles.statsItemLabel}>Amount</Text>
                  <TextInput
                    onChangeText={amount => setForm({ ...receiptData, amount })}
                    placeholder="Amount"
                    placeholderTextColor="#6b7280"
                    style={globalStyles.inputBox}
                    keyboardType="numeric"
                    value={receiptData.amount} />
                  <View style={{ flexDirection: 'row', height: 16 }} />
                  <Text style={styles.statsItemLabel}>Type</Text>
                  <TextInput
                    autoCorrect={false}
                    onChangeText={chargeType => setForm({ ...receiptData, chargeType })}
                    placeholder="Type of Charge"
                    placeholderTextColor="#6b7280"
                    style={globalStyles.inputBox}
                    value={receiptData.chargeType} />
                  <View style={{ flexDirection: 'row', height: 16 }} />
                  <Text style={styles.statsItemLabel}>Description</Text>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={description => setForm({ ...receiptData, description })}
                    placeholder="Description"
                    placeholderTextColor="#6b7280"
                    style={globalStyles.inputBox}
                    value={receiptData.description} />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View style={globalStyles.overlay}>
        <TouchableOpacity
          onPress={() => {
            // on Press add the user data to the database and navigate to the home page also reset the form so its empty
            navigation.goBack('', {});
          }}>
          <View style={globalStyles.button}>
            <Text style={globalStyles.buttonText} onPress={() => {
            global.csvArray.append(meterNumber, chargeType, description, new Date(), amount);
          }}>Add Charge</Text>
          </View>
        </TouchableOpacity>
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
    marginTop: 0,
  },
});
