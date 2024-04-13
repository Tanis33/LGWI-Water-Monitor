import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';

const dashboardData = [
  {
    communityName: csvArray[1][1],
    usersPaid: '12',
    usersUnpaid: '12',
    amountPaid: '123',
    amountUnpaid: '123',
    monthlyUsage: '1234',
    yearlyUsage: '12345',
  },
];

export default function Dashboard({ navigation }) {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3' }} >
      {dashboardData.map(({ communityName, usersPaid, usersUnpaid, amountPaid, amountUnpaid, monthlyUsage, yearlyUsage }, index) => {
        return (
          <View style={styles.container} key={index}>
            <Text style={styles.title}>{t('screens.dashboard.title')}</Text>
            <View style={styles.stats}>
              {/* Current System Box */}
              <View style={styles.statsRow}>
                <View style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="list" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemLabel}>{t('screens.dashboard.text.communityName')}</Text>
                    <Text style={styles.statsItemValue}>{communityName}</Text>
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
                    <Text style={styles.statsItemLabelGreen}>{t('screens.dashboard.text.paid')}</Text>
                    <Text style={styles.statsItemValue}>{usersPaid}</Text>
                  </View>
                </View>
                <View style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="users" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemLabelRed}>{t('screens.dashboard.text.unpaid')}</Text>
                    <Text style={styles.statsItemValue}>{usersUnpaid}</Text>
                  </View>
                </View>
              </View>

              {/* Payment Status for current system how mcuh $$ paid and unpaid*/}
              <View style={styles.statsRow}>

                <View style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="dollar-sign" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemLabelGreen}>{t('screens.dashboard.text.paid')}</Text>
                    <Text style={styles.statsItemValue}>{amountPaid}</Text>
                  </View>
                </View>
                <View style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="dollar-sign" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemLabelRed}>{t('screens.dashboard.text.unpaid')}</Text>
                    <Text style={styles.statsItemValue}>{amountUnpaid}</Text>
                  </View>
                </View>
              </View>

              {/* Monthly Usage */}
              <View style={styles.statsRow}>
                <View style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="activity" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemLabel}>{t('screens.dashboard.text.monthlyUsage')}</Text>

                    <Text style={styles.statsItemValue}>{monthlyUsage}</Text>
                  </View>
                </View>
              </View>
              {/* Yearly Usage */}
              <View style={styles.statsRow}>
                <View style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="activity" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemLabel}>{t('screens.dashboard.text.yearlyUsage')}</Text>

                    <Text style={styles.statsItemValue}>{yearlyUsage}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      })}
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
