import React, { useState } from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Example() {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Input Data</Text>

          <Text style={styles.subtitle}>Input water meter reading and click submit</Text>
        </View>

        <KeyboardAwareScrollView>
          <View style={styles.form}>
            {/* Input for read amount */}
            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <View style={{ backgroundColor: 'white', width: '100%' }}>
                  <Text style={styles.statsItemLabel}>Gauge ID</Text>
                  <TextInput
                    onChangeText={fullname => setForm({ ...form, fullname })}
                    placeholder="1234"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.fullname} />
                </View>
              </View>
            </View>
            {/* Read Amount (Input Data) */}
            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <View style={{ backgroundColor: 'white', width: '100%' }}>
                  <Text style={styles.statsItemLabel}>Read Amount</Text>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onChangeText={email => setForm({ ...form, email })}
                    placeholder="123.43"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.email} />
                </View>
              </View>
            </View>


            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <View style={{ backgroundColor: 'white', width: '100%' }}>
                  <Text style={styles.statsItemLabel}>Rate</Text>
                  <TextInput
                    autoCorrect={false}
                    onChangeText={password => setForm({ ...form, password })}
                    placeholder="0.43"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    secureTextEntry={true}
                    value={form.password} />
                </View>
              </View>
            </View>
            {/* Button Goes here */}
            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
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
    paddingVertical: 0,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
  },
  header: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#929292',
  },
  /** Form */
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 8,
  },

  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#02C3BD',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#02C3BD',
    borderColor: '#02C3BD',
    width: '50%',
    alignSelf: 'center',

  },
  btnText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    color: 'black',
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
});