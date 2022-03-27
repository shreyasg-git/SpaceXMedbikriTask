import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LaunchesList from './LaunchesList';

type LaunchPadInfoProps = {
  item: any;
};
const LaunchPadInfo: React.FC<LaunchPadInfoProps> = ({ item }) => {
  const [isLaunchesPaneOpen, setIsLaunchesPaneOpen] = useState<Boolean>(false);
  const toggleLaunchesPane = () => {
    setIsLaunchesPaneOpen(!isLaunchesPaneOpen);
  };

  return (
    <View
      style={
        isLaunchesPaneOpen
          ? styles['launchpadinfo-wrapper-open']
          : styles['launchpadinfo-wrapper']
      }>
      <View style={styles['launchpad-main']}>
        <LinearGradient
          colors={['#34D399', '#2563EB']}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.grediant}>
          <View style={styles.buttonContainer}>
            <View style={styles['lp-title']}>
              <Text style={styles['lp-title-text']}>{item.item.name}</Text>
              <TouchableOpacity onPress={toggleLaunchesPane}>
                <Text
                  style={
                    isLaunchesPaneOpen ? styles['caret-rotated'] : styles.caret
                  }>
                  &gt;
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles['lp-full-text']}>{item.item.full_name}</Text>
            <View style={styles['lp-status-bar']}>
              <View style={styles.status}>
                <Text>
                  {item.item.status === 'active' ? (
                    <>
                      <Text style={styles['active-dot']}>&bull;</Text>
                      <Text style={styles['active-text']}>&nbsp;Active</Text>
                    </>
                  ) : (
                    <>
                      <Text style={styles['retired-dot']}>&bull;</Text>
                      <Text style={styles['retired-text']}>&nbsp;Retired</Text>
                    </>
                  )}
                </Text>
              </View>
              <View>
                <Text>
                  <Text style={styles['region-txt']}>
                    Region: {item.item.region}&nbsp;&nbsp;
                  </Text>
                </Text>
              </View>
            </View>
            {isLaunchesPaneOpen ? (
              <LaunchesList launchIds={item.item.launches} />
            ) : null}
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
  },
  'active-text': {
    fontSize: 15,
    paddingLeft: 10,
    fontWeight: '700',
  },
  'active-dot': {
    fontWeight: '700',
    fontSize: 20,
    color: '#169D00',
    marginRight: 5,
  },
  'retired-dot': {
    fontWeight: '700',
    fontSize: 20,
    color: '#FF0000',
    marginRight: 5,
  },
  'retired-text': { fontSize: 15, paddingLeft: 10, fontWeight: '700' },
  status: {
    marginLeft: 5,
    fontSize: 15,
    paddingLeft: 10,
    fontWeight: '700',
  },
  'lp-status-bar': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  'lp-full-text': {
    color: '#2C2C2C',
    marginTop: 0,
    marginLeft: 10,
    flexWrap: 'wrap',
    height: 20,
  },
  'lp-title': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'lp-title-text': {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 23,
    color: '#050616',
    fontWeight: '600',
  },
  caret: {
    fontSize: 23,
    marginRight: 10,
    color: '#050616',
    transform: [{ rotate: '90deg' }],
  },
  'caret-rotated': {
    fontSize: 23,
    marginRight: 15,
    color: '#050616',
    transform: [{ rotate: '-90deg' }],
  },
  'launchpadinfo-wrapper': {
    margin: 5,
    marginLeft: 20,
    width: '90%',
    height: 100,
  },
  'launchpadinfo-wrapper-open': {
    margin: 5,
    marginLeft: 20,
    width: '90%',
    height: 257,
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
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    width: '98%',
    height: '98%',
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
