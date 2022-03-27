import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import useLaunchInfo from './../../../../../api/useLaunchInfo';

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
export default LaunchTitle;
