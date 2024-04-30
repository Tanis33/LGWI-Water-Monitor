import { StyleSheet } from 'react-native';

// globalStyles.js

export const globalStyles = StyleSheet.create({
  // Define your styles here
  container: {
    flex: 1,
    padding: 16,
  },
  titleText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 16,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4.22,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  /** Input **/
  inputBox: {
    height: 48,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 18,
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
    shadowRadius: 3.22,
    elevation: 3,
    backgroundColor: '#f9f9f9',
  },
  /** User Details */
  details: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 12,
    padding: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderColor: 'black',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 3,
  },
  detailsBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    height: 108,
    paddingVertical: 0,
  },
  detailsTag: {
    fontWeight: '500',
    fontSize: 12,
    color: '#939393',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  detailsName: {
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 32,
    color: '#000',
  },
  detailsNameRight: {
    flex: 1,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 32,
    color: '#000',
    textAlign: 'right',
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -8,
    marginBottom: 'auto',
    width: '100%',
  },
  detailsRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    borderRightWidth: 1,
    borderColor: 'transparent',
  },
  detailsRowItemText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#939393',
  },
  detailsRowDivider: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#939393',
  },
  // Overlay
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

});

