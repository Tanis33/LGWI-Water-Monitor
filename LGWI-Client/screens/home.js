import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Menu from './menu';
import { useTranslation } from 'react-i18next';

export default function Example({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://assets.withfra.me/Landing.3.png' }}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
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

        <TouchableOpacity
          onPress={() => { navigation.navigate('tabsHome', {Menu})
            
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>test</Text>
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
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 15,
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
    height: 400,
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
    fontSize: 28,
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
});