import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import LaunchPadInfo from './LaunchPadInfo';

const Launchpads: React.FC = () => {
  return (
    <View style={styles['main-wrapper']}>
      <FlatList
        data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
        renderItem={({ item }) => <LaunchPadInfo item={item} />}
        style={styles.flatlist}
        contentContainerStyle={styles['flatlist-content-container']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  'main-wrapper': { height: '100%', backgroundColor: '#454543' },
  flatlist: {
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  'flatlist-content-container': {
    flex: 1,
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
