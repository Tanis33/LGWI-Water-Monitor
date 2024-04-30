// home.js 
// Landing page for the app. User enters the community ID and clicks on "Lets go" button to navigate to the dashboard.

// Imports
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

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

        {/* App Title */}
        <Text style={styles.title}>
          <Text style={styles.appNameText}>LGWI Liquid Metircs</Text>
        </Text>

        {/* Community ID */}
        <View style={styles.stats}>
          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={{ width: '100%' }}>
                <Text style={styles.statsItemLabel}> COMMUNITY ID</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  onChangeText={communityID => setHome({ ...home, communityID })}
                  placeholder=""
                  placeholderTextColor="#6b7280"
                  style={globalStyles.inputBox}
                  value={home.communityID} />
              </View>
            </View>
          </View>

          {/* Let's Go Button */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('tabsHome', { homeData: home });
              setHome(initialFormState);
            }}>
            <View style={globalStyles.button}>
              <Text style={globalStyles.buttonText}>Lets go!</Text>
              {/* //{t('screens.home.text.submitButton')} */}
            </View>
          </TouchableOpacity>

          {/* Let's go (SPANISH) */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('tabsHome', { homeData: home });
              setHome(initialFormState);
            }}>
            <View style={globalStyles.button}>
              <Text style={globalStyles.buttonText}>Vamos!</Text>
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
  appNameText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#281b52',
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


  /** Logo */
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
});
