import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import useLaunchInfo from '../../../../api/useLaunchInfo';
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
        <View
          style={{
            height: 250,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 30, color: '#FF0000', paddingTop: 30 }}>
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

type LaunchTitleProps = {
  launchId: string;
  navToLaunchPage: Function;
};
const LaunchTitle: React.FC<LaunchTitleProps> = ({
  launchId,
  navToLaunchPage,
}) => {
  const { data, isSuccess, isLoading } = useLaunchInfo(launchId);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isSuccess) {
    return (
      <>
        <TouchableOpacity
          style={styles['main-wrapper']}
          onPress={() => {
            console.log(data);

            navToLaunchPage(data.name, data);
          }}>
          <Text style={styles['launch-name']}>{data.name}</Text>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <View>
      <Text>Error</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  'top-wrapper': {
    marginTop: 15,
  },
  'launch-name': {
    fontSize: 23,
    paddingLeft: 10,
    fontWeight: '600',
    color: '#050616',
    paddingBottom: 20,
  },
  'main-wrapper': {
    height: 50,
  },
});

export default LaunchesList;
