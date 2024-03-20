import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Dashboard({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
        <View style={styles.stats}>
          {/* Current System Box */}
          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="list" size={22} />
              </View>
              <View>
                <Text style={styles.statsItemLabel}>System Info</Text>
                <Text style={styles.statsItemValue}>83</Text>
              </View>
            </View>
          </View> 

          {/* Payment Status for current system how many paid and unpaid*/}
          <View style={styles.statsRow}>

            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="users" size={22} />
              </View>
              <View>
                <Text style={styles.statsItemLabelGreen}>Paid</Text>
                <Text style={styles.statsItemValue}>43</Text>
              </View>
            </View>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="users" size={22} />
              </View>
              <View>
                <Text style={styles.statsItemLabelRed}>Unpaid</Text>
                <Text style={styles.statsItemValue}>8</Text>
              </View>
            </View>
          </View>

          {/* Unsure what data to put here */}
          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon
                  color="#fff"
                  name="archive"
                  size={22} />
              </View>
              <View>
                <Text style={styles.statsItemLabel}>????</Text>
                <Text style={styles.statsItemValue}>22</Text>
              </View>
            </View>

            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon
                  color="#fff"
                  name="columns"
                  size={22} />
              </View>
              <View>
                <Text style={styles.statsItemLabel}>????</Text>
                <Text style={styles.statsItemValue}>48</Text>
              </View>
            </View>
          </View>

          {/* Next Payment Due */}
          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="list" size={22} />
              </View>
              <View>
                <Text style={styles.statsItemLabel}>Next Payment Due</Text>

                <Text style={styles.statsItemValue}>8/3/24</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Stats */
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
  statsItemIcon: {
    backgroundColor: '#03312E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    marginRight: 8,
    borderRadius: 8,
  },
  statsItemLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#8e8e93',
    marginBottom: 2,
  },
  statsItemValue: {
    fontSize: 22,
    fontWeight: '600',
    color: '#081730',
  },
  statsItemLabelGreen: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#2E7D32', 
    marginBottom: 2 
  },
  statsItemLabelRed: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#C62828', 
    marginBottom: 2 
  },
});