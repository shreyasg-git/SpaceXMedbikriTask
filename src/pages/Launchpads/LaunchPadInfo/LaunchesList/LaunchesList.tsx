import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LaunchTitle from './LaunchTitle';
import { RootStackParamList } from '../../../../App/App';

type LauncehsListNavProps = NativeStackNavigationProp<
  RootStackParamList,
  'Launch'
>;

type LaunchesListProps = {
  launchIds: string[];
};

const LaunchesList: React.FC<LaunchesListProps> = ({ launchIds }) => {
  const navigation = useNavigation<LauncehsListNavProps>();
  const navToLaunchPage = (name: string, launchData: any) => {
    navigation.navigate('Launch', { launchData: launchData, name: name });
  };

  const genList = () => {
    if (launchIds.length === 0) {
      return (
        <View style={styles['map-content-item']}>
          <Text style={styles['map-content-item-txt']}>
            No Launches Available
          </Text>
        </View>
      );
    }
    console.log('LAunhbahbd ', launchIds.length);

    return launchIds.slice(0, 3).map((l, index) => {
      console.log('ohho', l);
      const newL = JSON.parse(JSON.stringify(l));
      return (
        <LaunchTitle
          navToLaunchPage={navToLaunchPage}
          launchId={newL}
          key={index}
        />
      );
    });
  };

  return <View style={styles['top-wrapper']}>{genList()}</View>;
};

const styles = StyleSheet.create({
  'map-content-item': {
    height: 250,
    alignItems: 'center',
  },
  'map-content-item-txt': { fontSize: 30, color: '#FF0000', paddingTop: 30 },
  'top-wrapper': {
    marginTop: 15,
  },
});

export default LaunchesList;
