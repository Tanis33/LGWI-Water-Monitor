// conformation.js page for confirming of the cost and the calculation of the cost based on water usage
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const conformationData = [
  {
    receiptID: 'receipt.receiptID',
    balance: 'receipt.balance',
    date: 'receipt.date',
    chargeType: 'receipt.chargeType',
    meternumber: 'user.meternumber',
    name: 'user.name',
    surname: 'user.surname',
    idNumber: 'user.idnumber',
    sector: 'user.sector',
    phoneNumber: 'user.phonenumber',
    email: 'user.email',
    status: 'user.status',
    category: 'user.category',
    spacer: '                                ',
  },
];

export default function ConformationScreen({ navigation }) {
  const [form, setForm] = useState({
    meternumber: '',
    name: '',
    surname: '',
    idNumber: '',
    sector: '',
    phoneNumber: '',
    email: '',
    status: '',
    category: '',
  });
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          {conformationData.map(({ receiptID, balance, date, chargeType, meternumber, name, surname, idNumber, sector, phoneNumber, email, status, category, spacer }, index) => {
            return (
              <ScrollView
                contentContainerStyle={styles.receipt}
                showsVerticalScrollIndicator={false}
                key={index}>
                <View style={styles.details} >
                  <Text style={styles.detailsTitle}>Add User</Text>
                  {/* Meter Number */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>Meter Number</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="numeric"
                      onChangeText={meternumber => setForm({ ...form, meternumber })}
                      placeholder={spacer}
                      placeholderTextColor="#000000"
                      style={styles.inputBox}
                      value={form.meternumber} />
                  </View>
                  {/* First Name */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>Name</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={name => setForm({ ...form, name })}
                      placeholder={spacer}
                      placeholderTextColor="#000000"
                      style={styles.inputBox}
                      value={form.name} />
                  </View>
                  {/* Last Name */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>Surname</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={surname => setForm({ ...form, surname })}
                      placeholder={spacer}
                      placeholderTextColor="#000000"
                      style={styles.inputBox}
                      value={form.surname} />
                  </View>
                  {/* ID Number */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>ID Number</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="numeric"
                      onChangeText={idNumber => setForm({ ...form, idNumber })}
                      placeholder={spacer}
                      placeholderTextColor="#000000"
                      style={styles.inputBox}
                      value={form.idNumber} />
                  </View>
                  {/* Sector */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>Sector</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={sector => setForm({ ...form, sector })}
                      placeholder={spacer}
                      placeholderTextColor="#000000"
                      style={styles.inputBox}
                      value={form.sector} />
                  </View>
                  {/* Phone Number */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>Phone Number</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="numeric"
                      onChangeText={phoneNumber => setForm({ ...form, phoneNumber })}
                      placeholder={spacer}
                      placeholderTextColor="#000000"
                      style={styles.inputBox}
                      value={form.phoneNumber} />
                  </View>
                  {/* Email */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>Email</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={email => setForm({ ...form, email })}
                      placeholder={spacer}
                      placeholderTextColor="#000000"
                      style={styles.inputBox}
                      value={form.email} />
                  </View>
                  {/* Status */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>Status</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={status => setForm({ ...form, status })}
                      placeholder={spacer}
                      placeholderTextColor="#000000"
                      style={styles.inputBox}
                      value={form.status} />
                  </View>
                  {/* Category */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>Category</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={category => setForm({ ...form, category })}
                      placeholder={spacer}
                      placeholderTextColor="#000000"
                      style={styles.inputBox}
                      value={form.category} />
                  </View>

                </View>

              </ScrollView>
            );
          })}
        </View>
      </SafeAreaView>

      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Add User</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('tabsHome', {});
          }}>
          <View style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>Cancel</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
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
  inputBox: {
    height: 32,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 17,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#02C3BD',
  },
});