import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import LaunchPadInfo from './LaunchPadInfo';
import useLaunchPads from '../../api/useLaunchPads';

const Launchpads: React.FC = () => {
  const { data, isLoading, isSuccess } = useLaunchPads();
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (isSuccess) {
    return (
      <View style={styles['main-wrapper']}>
        <FlatList
          data={data}
          renderItem={item => <LaunchPadInfo item={item} />}
          // style={styles.flatlist}
          contentContainerStyle={styles['flatlist-content-container']}
        />
      </View>
    );
  }

  return (
    <View>
      <Text>404</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  'main-wrapper': {
    height: '100%',
    backgroundColor: '#454543',
    paddingTop: 50,
  },
  flatlist: {
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  'flatlist-content-container': {
    justifyContent: 'center',
  },
  lp: {
    // backgroundColor: '#565656',
    width: '90%',
    height: 100,
    // height: '80%',
  },
});

export default Launchpads;
