import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';


export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [beginningLocation, setBLocation] = useState(null);
  const [location, setLocation] = useState(null);
  const [dist, setDist] = useState(null);
  const [farEnough, setFarEnough] = useState(false);

  const updatePosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };


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

  const distance = () => {
    if (!location || !beginningLocation) {
      alert('could not find location');
      return 0;
    }

    var R = 6378.137;
    var dLat = Math.abs(beginningLocation.coords.latitude * Math.PI / 180 - location.coords.latitude * Math.PI / 180);
    var dLon = Math.abs(location.coords.longitude * Math.PI / 180 - location.coords.longitude * Math.PI / 180);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(beginningLocation.coords.latitude * Math.PI / 180) * Math.cos(location.coords.latitude * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    //console.log(d * 1000);
    setDist(d * 1000);
}


  const checkDistance = () => {
    distance();
    if (dist != null) {
      if (dist >= 100) {
        toggleRun();
        setFarEnough(true);
      }
    }
    setFarEnough(false);
    updatePosition();

  }

  const setStartPosition = () => {
    if (!location) {
      alert('Permission to access location was denied');
      setBLocation(null);
      return;
    }
    setBLocation(location);
  };

  const toggleRun = () => {
    if (isRunning) {
      setIsRunning(!isRunning);
      setBLocation(null);
    } else {
      setStartPosition();
      setIsRunning(!isRunning);
    }
  };

  return (
    <View style={styles.container}>
      {!location ? (
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
      ) : (
        <MapView
        style={styles.map}
        provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
          />
          </MapView>
      )}

      {!isRunning ? (
        <View>
          <TouchableOpacity
            style={styles.startButton}
            onPress={toggleRun}
          >
            <Text style={styles.buttonText}>{"Start Run"}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            style={styles.stopButton}
            onPress={toggleRun}
          >
            <Text style={styles.buttonText}>{"Stop Run"}</Text>
          </TouchableOpacity>
          <Button style="styles.button" onPress={checkDistance} title={"Check Distance"}>
          <Text style={styles.buttonText}>Check Distance</Text>
          </Button>
        </View>
      )}
      <View>
        <Text>
          {JSON.stringify(location)}
        </Text>
        { beginningLocation ? (
          <View>
            <Text>{JSON.stringify(beginningLocation)}</Text>
            <Text>{dist}</Text>
          </View>
        ) : (
          <></>
        )}
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