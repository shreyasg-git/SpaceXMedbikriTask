import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../pages/Homepage';
// import { View, Text } from 'react-native';
import Launchpads from '../pages/Launchpads';
import Launch from '../pages/Launch';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
export type RootStackParamList = {
  Home: undefined;
  Launchpads: undefined;
  Launch: { launchData: Object; name: string } | undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
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
          <Stack.Screen
            component={Launch}
            name="Launch"
            options={({ route }) => ({
              title: route.params?.name,
              launchData: route.params?.launchData,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
