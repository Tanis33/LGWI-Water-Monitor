import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DashboardScreen from './dashboard';
import { useTranslation } from 'react-i18next';

export default function Home({ navigation }) {
  // set the global filename and contents variables to some test values
  global.communityID = '123456';
  global.csvContents = "NothingInteresting";
  const [home, setHome] = useState({
    locationID: '',
  });
  const initialFormState = {
    locationID: '',
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Welcome Message */}
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Track water usage {'\n'}with{' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>LGWI Liquid Metircs</Text>
            </View>
          </Text>
          <Text style={styles.text}>

          </Text>
        </View>

        {/* Location ID */}
        <View style={styles.statsRow}>
          <View style={styles.statsItem}>
            <View style={{ backgroundColor: 'white', width: '100%' }}>
              <Text style={styles.statsItemLabel}>Location ID</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                onChangeText={locationID => setHome({ ...home, locationID })}
                placeholder="123456"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={home.locationID} />
            </View>
          </View>
        </View>

        {/* Let's Go Button */}
        <TouchableOpacity
          onPress={() => {
            //if home.locationID is 6 digit number then navigate to dashboard
              navigation.navigate('tabsHome', { homeData: home });
              setHome(initialFormState);
              //set the global communityID to the locationID
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Lets go!</Text>
            {/* //{t('screens.home.text.submitButton')} */}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  },
  /** Hero */
  hero: {
    backgroundColor: '#d8dffe',
    margin: 12,
    borderRadius: 16,
    padding: 16,
  },
  heroImage: {
    width: '100%',
    height: 350,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    backgroundColor: '#fff2dd',
    transform: [
      {
        rotate: '-5deg',
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#281b52',
  },
  /** Button */
  button: {
    backgroundColor: '#02C3BD',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  stats: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: -6,
    width: '80%',
    alignSelf: 'center',
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
    alignSelf: 'center',
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
    alignContent: 'center',
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
  },
});
