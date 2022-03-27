import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../pages/Homepage';
// import { View, Text } from 'react-native';
import Launchpads from '../pages/Launchpads';

export type RootStackParamList = {
  Home: undefined;
  Launchpads: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Homepage}
          name="Home"
          options={{ title: 'SpaceX API Endpoint' }}
        />
        <Stack.Screen
          component={Launchpads}
          name="Launchpads"
          options={{ title: 'LaunchPads' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
