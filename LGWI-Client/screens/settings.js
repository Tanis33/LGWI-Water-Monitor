import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Linking
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Settings({ navigation }) {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            {/* Language */}
            <TouchableOpacity
              onPress={() => {

              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                <FeatherIcon color="#fff" name="globe" size={20} />
              </View>

              <Text style={styles.rowLabel}>Language</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            {/* System Location */}
            <TouchableOpacity
              onPress={() => navigation.navigate('DatabaseTest', {})
              }
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                <FeatherIcon
                  color="#fff"
                  name="navigation"
                  size={20} />
              </View>

              <Text style={styles.rowLabel}>Firebase CSVs</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>

            {/* Report Bug */}
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#8e8d91' }]}>
                <FeatherIcon color="#fff" name="flag" size={20} />
              </View>

              <Text style={styles.rowLabel}>Report Bug</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            {/* View Project (link to github)*/}
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://github.com/Tanis33/LGWI-Water-Monitor');
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
                <FeatherIcon color="#fff" name="mail" size={20} />
              </View>

              <Text style={styles.rowLabel}>View Project</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            {/* Developers */}
            <TouchableOpacity
              onPress={() => {
                openModal();
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                <FeatherIcon color="#fff" name="star" size={20} />
              </View>

              <Text style={styles.rowLabel}>Developers</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>
          </View>
          {/* About Developers Modal */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              closeModal();
            }}>
            <View style={styles.header}>
              <View style={styles.headerAction}>
                <TouchableOpacity onPress={() => closeModal()}>
                  <FeatherIcon name="x" size={40} style={{ paddingTop: 25, alignItems: 'flex-end', }} />
                </TouchableOpacity>

                <View style={styles.projInfo}>
                  <View>
                    <Text style={styles.profileName}>LGWI Liquid Metics</Text>

                    <Text style={styles.profileAddress}>
                      Calvin University - Senior Design Project 2023/2024
                    </Text>
                    <Text style={styles.profileAddress}>
                      Version 1.0.0
                    </Text>
                  </View>
                </View>

                <View style={styles.profile}>
                  <TouchableOpacity
                    onPress={() => {
                      // open up website / github
                    }}>
                    <View style={styles.profileAvatarWrapper}>
                      <Image
                        alt=""
                        source={require('../assets/benPFP.png')}
                        style={styles.profileAvatar} />
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.profileName}>Benjamin Tanis</Text>
                    <Text style={styles.profileAddress}>
                      Calvin University - Front End Developer
                    </Text>
                  </View>
                </View>
                <View style={styles.profile}>
                  <TouchableOpacity
                    onPress={() => {
                      // open up website / github
                    }}>
                    <View style={styles.profileAvatarWrapper}>
                      <Image
                        alt=""
                        source={require('../assets/jacobPFP.png')}
                        style={styles.profileAvatar} />
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.profileName}>Jacob Westra</Text>
                    <Text style={styles.profileAddress}>
                      Calvin University
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Modal>


        </ScrollView>
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
  },
  /** Profile */
  profile: {
    padding: 24,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#02C3BD',
    borderRadius: 12,
    padding: 16,
    margin: 16,
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
    textAlign: 'center',
  },
  /** Section */
  section: {
    paddingHorizontal: 0,
  },
  sectionTitle: {
    paddingVertical: 8,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f3',
    height: '100%',
  },
  projInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: -24,
  },

  header: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#929292',
  },
});