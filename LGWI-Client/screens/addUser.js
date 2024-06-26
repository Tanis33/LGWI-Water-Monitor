//addUser Page Adds a new user to the database
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
import { useTranslation } from 'react-i18next';
import { globalStyles } from '../styles/globalStyles';

//User Information
const userData = [
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
    spacer: '                                            ',
  },
];


export default function AddUser({ navigation }) {

  //Empty form to be filled by the user data and added to the database
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

  //Translation
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          {/* Maps userData */}
          {userData.map(({ receiptID, balance, date, chargeType, meternumber, name, surname, idNumber, sector, phoneNumber, email, status, category, spacer }, index) => {
            return (
              <ScrollView
                contentContainerStyle={styles.receipt}
                showsVerticalScrollIndicator={false}
                key={index}>
                <Text style={styles.detailsTitle}>{t('screens.addUser.title')}</Text>
                <View style={styles.details} >
                  {/* Meter Number */}
                  <View style={styles.detailsRow}>
                    <Text style={styles.detailsField}>{t('screens.addUser.text.meternumber')}</Text>
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
                    <Text style={styles.detailsField}>{t('screens.addUser.text.name')}</Text>
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
                    <Text style={styles.detailsField}>{t('screens.addUser.text.surname')}</Text>
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
                    <Text style={styles.detailsField}>{t('screens.addUser.text.idNumber')}</Text>
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
                    <Text style={styles.detailsField}>{t('screens.addUser.text.sector')}</Text>
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
                    <Text style={styles.detailsField}>{t('screens.addUser.text.phoneNumber')}</Text>
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
                    <Text style={styles.detailsField}>{t('screens.addUser.text.email')}</Text>
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
                    <Text style={styles.detailsField}>{t('screens.addUser.text.status')}</Text>
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
                    <Text style={styles.detailsField}>{t('screens.addUser.text.category')}</Text>
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
            // on Press add the user data to the database and navigate to the home page also reset the form so its empty
            navigation.navigate('tabsHome', {});
          }}>
          <View style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>{t('screens.addUser.text.addUser')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('tabsHome', {});
          }}>
          <View style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>{t('screens.addUser.text.cancel')}</Text>
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
  /** Details */
  details: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    borderRadius: 12,
    padding: 8, 
    
  },
  detailsTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
    alignSelf: 'flex-start',
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
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '600',
    color: '#444',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'right',

  },

  inputBox: {
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 17,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#02C3BD',
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