// home.js 
// Landing page for the app. User enters the community ID and clicks on "Lets go" button to navigate to the dashboard.

// Imports
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';


export default function Home({ navigation }) {

  // set the global filename and contents variables to some test values
  global.communityID = '123456';
  global.csvContents = "NothingInteresting";
  global.csvArray = [];

  // form for passing the community ID to the dashboard
  const [home, setHome] = useState({
    communityID: '',
  });
  const initialFormState = {
    communityID: '',
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Logo */}
        <View style={styles.logo}>
          <Ionicons name="water" size={150} color={'blue'}></Ionicons>
        </View>

        {/* Welcome Message */}
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            <Text style={styles.appNameText}>LGWI Liquid Metircs</Text>
          </Text>
          <Text style={styles.text}>
          </Text>
        </View>

        {/* Community ID */}
        <View style={styles.stats}>
          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={{ width: '100%' }}>
                <Text style={styles.statsItemLabel}>COMMUNITY ID</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  onChangeText={communityID => setHome({ ...home, communityID })}
                  placeholder=""
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={home.communityID} />
              </View>
            </View>
          </View>

          {/* Let's Go Button */}
          <TouchableOpacity
            onPress={() => {
              //if home.communityID is 6 digit number then navigate to dashboard
              navigation.navigate('tabsHome', { homeData: home });
              setHome(initialFormState);
              //set the global communityID to the communityID
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Lets go!</Text>
              {/* //{t('screens.home.text.submitButton')} */}
            </View>
          </TouchableOpacity>

          {/* Let's go (SPANISH) */}
          <TouchableOpacity
            onPress={() => {
              //if home.communityID is 6 digit number then navigate to dashboard
              navigation.navigate('tabsHome', { homeData: home });
              setHome(initialFormState);
              //set the global communityID to the communityID
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Vamos!</Text>
              {/* //{t('screens.home.text.submitButton')} */}
            </View>
          </TouchableOpacity>
        </View>
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
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
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

  appNameText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#281b52',
  },
  /** Button */
  button: {
    width: '90%',
    height: 56,
    backgroundColor: '#02C3BD',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  stats: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 40,
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: -6,
    width: '100%',
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
    marginHorizontal: 6,
    marginBottom: 12,
  },
  statsItemLabel: {
    fontSize: 16,
    color: 'black',
    marginBottom: 2,
    fontWeight: 'bold',
    marginTop: -6,
    alignSelf: 'flex-start',
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
    height: 48,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#02C3BD',
  },
  /** Logo */
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
});
