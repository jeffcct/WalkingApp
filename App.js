import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';


export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [beginningLocation, setBLocation] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);



  const setStartPosition = () => {
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          alert('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setBLocation(location);
      })();
    }, []);
  };

  const toggleRun = () => {
    setIsRunning(!isRunning);
    setStartPosition();
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        />
      </MapView>

      <TouchableOpacity
        style={isRunning ? styles.stopButton : styles.startButton}
        onPress={toggleRun}
      >
        <Text style={styles.buttonText}>{isRunning ? "Stop Run" : "Start Run"}</Text>
      </TouchableOpacity>
      <Button style="styles.button" onPress={setStartPosition} title={"Check Distance"}>
        <Text style={styles.buttonText}>Check Distance</Text>
      </Button>
      <View>
        <Text>
          {JSON.stringify(location)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '90%',
    height: '50%',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: 'green',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  stopButton: {
    backgroundColor: 'red',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});