import React, { useState } from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';

export default function Input({ navigation }) {

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
                <View style={{ backgroundColor: 'white', width: '100%' }}>
                  <Text style={styles.statsItemLabel}>{t('screens.input.text.title')}</Text>
                  <TextInput
                    onChangeText={meterNumber => setForm({ ...inputData, meterNumber })}
                    placeholder="Meter"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    keyboardType="numeric"
                    value={inputData.meterNumber} />
                  <TextInput
                    autoCorrect={false}
                    onChangeText={cedula => setForm({ ...inputData, cedula })}
                    placeholder="Cédula"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    keyboardType="numeric"
                    value={inputData.cedula} />
                </View>
              </View>
            </View>

            {/* Read Amount (Input Data) */}
            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <View style={{ backgroundColor: 'white', width: '100%' }}>

                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.statsItemLabel}>Water Meter Reading  m</Text>
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
                  
                  navigation.navigate('Loading');
                  setTimeout(()=> {
                    navigation.navigate('Conformation', { inputData: inputData });
                   }, 1000);
                  
                  
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  /** Button */
  btn: {
    backgroundColor: '#02C3BD',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
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
  volumeDescriptor: {
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
    fontWeight: 'bold',

  },
});
