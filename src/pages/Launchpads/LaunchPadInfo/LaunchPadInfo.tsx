import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type LaunchPadInfoProps = {
  item: { key: number };
};
const LaunchPadInfo: React.FC<LaunchPadInfoProps> = () => {
  return (
    <View style={styles['launchpadinfo-wrapper']}>
      <View style={styles['launchpad-main']}>
        <LinearGradient
          colors={['#34D399', '#2563EB']}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.grediant}>
          <View style={styles.buttonContainer}>
            <View style={styles['lp-title']}>
              <Text style={styles['lp-title-text']}>Launchpad 1</Text>
              <TouchableOpacity>
                <Text style={styles.caret}>&gt;</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles['lp-full-text']}>
              Vandenberg Air Force Base Space Launch Complex 4E
            </Text>
            <View style={styles['lp-status-bar']}>
              <View style={styles.status}>
                <Text>
                  <Text style={styles['active-dot']}>&bull;</Text>
                  <Text style={styles['active-text']}>&nbsp;Active</Text>
                </Text>
              </View>
              <View>
                <Text>
                  <Text style={styles['region-txt']}>
                    Region: California&nbsp;&nbsp;
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  'region-txt': {
    fontSize: 15,
    paddingLeft: 10,
    fontWeight: '700',
    flex: 1,
  },
  'active-text': {
    fontSize: 15,
    paddingLeft: 10,
    fontWeight: '700',
    flex: 1,
  },
  'active-dot': {
    fontWeight: '700',
    fontSize: 20,
    color: '#169D00',
    marginRight: 5,
  },
  status: {
    marginLeft: 5,
    fontSize: 15,
    paddingLeft: 10,
    fontWeight: '700',
    flex: 1,
  },
  'lp-status-bar': {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  'lp-full-text': {
    color: '#2C2C2C',
    marginTop: 0,
    marginLeft: 5,
    flexWrap: 'wrap',
    height: 20,
  },
  'lp-title': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'lp-title-text': {
    marginLeft: 5,
    fontSize: 23,
    color: '#050616',
    fontWeight: '600',
  },
  caret: {
    fontSize: 23,
    marginRight: 5,
    color: '#050616',
  },
  'launchpadinfo-wrapper': {
    margin: 5,
    marginLeft: 20,
    width: '90%',
    height: 100,
  },
  'launchpad-main': {},
  grediant: {
    height: '100%',
    width: '100%',
    paddingBottom: 4,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 14,
  },
  buttonContainer: {
    flex: 1.0,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    width: '98%',
    borderRadius: 11,
    margin: 1,
    marginTop: 3,
    marginBottom: 3,
    activeOpacity: 0.1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#050616',
    alignSelf: 'center',
    fontSize: 30,
  },
});
export default LaunchPadInfo;
