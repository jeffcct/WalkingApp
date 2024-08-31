import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [isRunning, setIsRunning] = useState(false);

  const toggleRun = () => {
    setIsRunning(!isRunning);
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
          title={"You are here"}
        />
      </MapView>

      <TouchableOpacity
        style={isRunning ? styles.stopButton : styles.startButton}
        onPress={toggleRun}
      >
        <Text style={styles.buttonText}>{isRunning ? "Stop Run" : "Start Run"}</Text>
      </TouchableOpacity>
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