import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';

import * as Location from 'expo-location';
export default function App() {
  const [location, setLocation]: any = useState();
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let { latitude, longitude }: any = '';
  
  if (errorMsg) {
    console.log(errorMsg);
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
  }
  return (
    <View style={styles.container}>
      <Text>Localização Atual é: </Text>
      <Text>{latitude}</Text>
      <Text>{longitude}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
