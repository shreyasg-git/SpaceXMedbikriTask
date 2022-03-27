import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../../App/App';
type HomepageNavProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Homepage: React.FC = ({}) => {
  const navigation = useNavigation<HomepageNavProps>();
  const colorScheme = useColorScheme() || 'dark';
  const navigateToLaunchPads = () => {
    navigation.navigate('Launchpads');
  };
  return (
    <View
      style={
        colorScheme === 'dark'
          ? styles['homepage-bg-dark']
          : styles['homepage-bg-light']
      }>
      <LinearGradient
        colors={['#34D399', '#2563EB']}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.grediant}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={navigateToLaunchPads}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  'homepage-bg-light': {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDFDFD',
    width: '100%',
    height: '100%',
  },
  'homepage-bg-dark': {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#454545',
    width: '100%',
    height: '100%',
  },
  'homepage-next-button': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 140,
    width: '60%',
    backgroundColor: '#467545',
    height: 230,
    borderWidth: 2,
    borderColor: '#999999',
  },
  grediant: {
    height: 230,
    width: '60%',
    borderRadius: 140,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1.0,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '97%',
    // height: '90%',
    borderRadius: 140,
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

export default Homepage;
