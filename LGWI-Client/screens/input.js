import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';

export default function Input({ navigation }) {
  // form for passing the houseID or meterNumber and usageAmount to the conformation page
  const [inputData, setForm] = useState({
    meterNumber: '',
    cedula: '',
    usageAmount: '',
  });

  const initialFormState = {
    meterNumber: '',
    cedula: '',
    usageAmount: '',
  };

  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
      <View style={styles.container}>
        <Text style={styles.title}>{t('screens.input.title')}</Text>
        <KeyboardAwareScrollView>
          <View style={styles.inputData}>
            {/* Input for house id or gauge ID*/}
            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <View style={{ width: '100%' }}>
                  <Text style={styles.statsItemLabel}>   {t('screens.input.text.title')}</Text>
                  <TextInput
                    onChangeText={meterNumber => setForm({ ...inputData, meterNumber })}
                    placeholder="Meter"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    keyboardType="numeric"
                    value={inputData.meterNumber} />

                  <Text style={styles.statsItemLabel}>       OR</Text>
                  <Text style={styles.statsItemLabel}>   {t('screens.input.text.title1')}</Text>

                  <TextInput
                    autoCorrect={false}
                    onChangeText={cedula => setForm({ ...inputData, cedula })}
                    placeholder="Cédula"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    keyboardType="numeric"
                    value={inputData.cedula} />

                  <View style={{ flexDirection: 'row', height: 32 }} />

                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.statsItemLabel}>    {t('screens.input.text.waterMeter')} m</Text>
                    <Text style={styles.volumeDescriptor}>3</Text>
                  </View>


                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                    onChangeText={usageAmount => setForm({ ...inputData, usageAmount })}
                    placeholder="123.43"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={inputData.usageAmount} />

                </View>
              </View>
            </View>

            {/*Submit Button */}
            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  // pass the data in the input into the next page and query the data for the user based on houseID or meterNumber

                  //if the houseID and meterNumber are empty then show an alert
                  if (inputData.houseID === '' && form.meterNumber === '') {
                    alert('Please enter a valid House ID or ID Number');
                    return;
                  }
                  //if the usageAmount is empty then show an alert
                  if (inputData.usageAmount === '') {
                    alert('Please enter a valid Water Meter Reading');
                    return;
                  }
                  //if the usageAmount is not a number then show an alert
                  if (isNaN(inputData.usageAmount)) {
                    alert('Please enter a valid Water Meter Reading');
                    return;
                  }
                  //if the usageAmount is less than 0 then show an alert
                  if (inputData.usageAmount < 0) {
                    alert('Please enter a valid Water Meter Reading');
                    return;
                  }
                  //else navigate to the conformation page


                  //CSV

                  // calculate the balance by taking the usageAmount and multiplying it by the rate
                  // then navigate to the conformation page
                  //community rate
                  let balance = inputData.usageAmount * 0.5;
                  //round to 2 decimal places
                  balance = Math.round(balance * 100) / 100;

                  navigation.navigate('Conformation', { inputData: inputData, balance });
                  setForm(initialFormState);
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
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
    marginBottom: 8,
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
    height: 48,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#02C3BD',
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: -6,

  },
  /** Button */
  btn: {
    backgroundColor: '#02C3BD',
    height: 56,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4.22,
    elevation: 3,
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
    marginHorizontal: 0,

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
    marginHorizontal: 6,
    marginBottom: 12,
  },
  statsItemLabel: {
    fontSize: 18,
    color: 'black',
    marginBottom: 8,
    fontWeight: 'bold',
    marginTop: 8,
  },
  volumeDescriptor: {
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
    fontWeight: 'bold',

  },
});
