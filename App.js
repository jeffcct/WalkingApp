import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import the screen components
import HomeScreen from "./Screens/HomeScreen";
import HistoryScreen from "./Screens/HistoryScreen";
import ChallengesScreen from "./Screens/ChallengesScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide the default header
      />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Challenges" component={ChallengesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
