// conformation.js page for confirming of the cost and the calculation of the cost based on water usage
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const items = [
  {
    name: 'John Doe',
    systemID: '123214',
    gagueID: '123214',
    tag: 'unpaid',
    date: 'Mar 24, 2023',
  },
];

export default function Example() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>  
          <ScrollView
            contentContainerStyle={styles.receipt}
            showsVerticalScrollIndicator={false}>

            <Text style={styles.receiptSubtitle}>Invoice #0012-2832</Text>

            <View style={styles.receiptPrice}>
              <Text style={styles.receiptPriceText}>$111 (amount owed)</Text>
            </View>

            <Text style={styles.receiptDescription}>
              Water Bill March 2023 - April 2023
            </Text>

            

            <View style={styles.divider}>
              <View style={styles.dividerInset} />
            </View>

            <View style={styles.details}>
              <Text style={styles.detailsTitle}>Transaction details</Text>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Date</Text>

                <Text style={styles.detailsValue}>April 2, 2023</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Category</Text>

                <Text style={styles.detailsValue}>Residential</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Payment method</Text>

                <Text style={styles.detailsValue}>Visa ending in 0182</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Receipt Number</Text>

                <Text style={styles.detailsValue}>9876543210</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Billing Name</Text>

                <Text style={styles.detailsValue}>John Smith</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Billing ID Number</Text>

                <Text style={styles.detailsValue}>123456789</Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Neighborhood</Text>

                <Text style={styles.detailsValue}>
                  Name of Neighborhood
                </Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Test</Text>

                <Text style={styles.detailsValue}>
                  1234 Elm Street, Suite 567, Anytown, USA
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Confrim Bill</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>Change Bill</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  detailsRow: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  detailsField: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#8c8c8c',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  detailsValue: {
    fontSize: 15,
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
});