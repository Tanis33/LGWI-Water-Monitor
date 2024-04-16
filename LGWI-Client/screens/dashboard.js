import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';

const dashboardData = [
  {
    communityName: "Ecovillage",
    usersPaid: "5",
    usersUnpaid: "7",
    amountPaid: "20.75",
    amountUnpaid: "48.20",
    monthlyUsage: "34.4",
    yearlyUsage: "84.6",
  },
]


// const dashboardData = [
//   {
//     communityName: csvArray[1][1],
//     usersPaid: getusersPaid(),
//     usersUnpaid: getusersUnpaid(),
//     amountPaid: getamountPaid(),
//     amountUnpaid: getamountUnpaid(),
//     monthlyUsage: getUsage(),
//     yearlyUsage: getUsage(),
//   },
// ];

function getusersPaid() {

  let paid = 0;
  for (let i = 3; i < csvArray.length; i++) {
    if (csvArray[i][20] == "Paid          ") {
      paid++;
    }
  }
  return paid;
}

function getusersUnpaid() {

  let unpaid = 0;
  for (let i = 3; i < csvArray.length; i++) {
    if (csvArray[i][20] == "Unpaid        ") {
      unpaid++;
    }
  }
  return unpaid;
}

function getamountPaid() {
  paidAmt = 0;
  for (let i = 3; i < csvArray.length; i++) {
    if (csvArray[i][20] == "Paid          ") {
      paidAmt += parseFloat(csvArray[i][19]);
    }
  }
  return paidAmt;
}

function getamountUnpaid() {
  unpaidAmt = 0;
  for (let i = 3; i < csvArray.length; i++) {
    if (csvArray[i][20] == "Unpaid        ") {
      unpaidAmt += parseFloat(csvArray[i][19]);
    }
  }
  return unpaidAmt;
}

function getUsage() {
  let totalUsed = 0;
  for (let i = 3; i < csvArray.length; i++) {
    totalUsed += csvArray[i][11] - csvArray[i][12];

  }
  return totalUsed;
}

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
                    <Text style={styles.statsItemValue}>${amountPaid}</Text>
                  </View>
                </View>
                <View style={styles.statsItem}>
                  <View style={styles.statsItemIcon}>
                    <FeatherIcon color="#fff" name="dollar-sign" size={22} />
                  </View>
                  <View>
                    <Text style={styles.statsItemLabelRed}>{t('screens.dashboard.text.unpaid')}</Text>
                    <Text style={styles.statsItemValue}>${amountUnpaid}</Text>
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

                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.statsItemValue}>{monthlyUsage} m</Text>
                      <Text style={styles.volumeDescriptor}>3</Text>
                    </View>
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
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.statsItemValue}>{yearlyUsage} m</Text>
                      <Text style={styles.volumeDescriptor}>3</Text>
                    </View>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 3,
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
  volumeDescriptor: {
    fontSize: 14,
    color: 'black',
    marginBottom: 2,
    fontWeight: 'bold',
  },
});
