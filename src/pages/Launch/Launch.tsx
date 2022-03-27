import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Launch: React.FC<any> = ({ route }) => {
  const { launchData } = route.params;

  const date = new Date(launchData.date_utc);
  return (
    <LinearGradient
      colors={['#34D399', '#2563EB']}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={styles.grediant}>
      <View style={styles.buttonContainer}>
        <View style={styles['main-wrapper']}>
          <Text style={styles['hero-text']}>{launchData.name}</Text>

          <Text style={styles['hero-text-2']}>
            {launchData.details ? launchData.details : 'No Details Available'}
          </Text>
          <Text style={{ fontSize: 20 }}>-: Launch Date :- </Text>
          <Text style={styles['hero-text-3']}>{date.toUTCString()}</Text>
          <Text style={styles['hero-text-4']}>
            Was this reused ? : {launchData.cores[0].reused ? 'Yes' : 'No'}
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: launchData.links.patch.large,
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 300,
    height: 300,
  },
  'main-wrapper': {
    marginTop: 50,
    alignItems: 'center',
  },
  'hero-text': {
    fontSize: 30,
    color: '#050616',
  },
  'hero-text-2': {
    fontSize: 20,
  },
  'hero-text-3': {
    color: '#050616',
    fontSize: 20,
  },
  'hero-text-4': {
    color: '#050616',
    fontSize: 20,
    marginVertical: 10,
  },
  grediant: {
    height: 600,
    width: '90%',
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

export default Launch;
