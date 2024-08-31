// import * as React from "react";
import React, { useEffect, useState } from "react";
import {View} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import the screen components
import HomeScreen from "./Screens/HomeScreen";
import HistoryScreen from "./Screens/HistoryScreen";
import ChallengesScreen from "./Screens/ChallengesScreen";
import ProfileScreen from "./Screens/ProfileScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen"

import { onAuthStateChanged, User } from 'firebase/auth'
import { FIREBASE_AUTH } from "./FirebaseConfig";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // http1122#

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true }} // Hide the default header
      />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Challenges" component={ChallengesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  useEffect( () => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      // console.log('user', user);
      setUser(user);
    })
  });

  return (
    <NavigationContainer>
      {user ? (
        // <div>
          <MyTabs />
          // <StatusBar style="auto" />
        // </div>
      ) : 
      (
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
      
    </NavigationContainer>
  );
}
