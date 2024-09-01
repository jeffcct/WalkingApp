import React from "react";
import { View, Text } from "react-native";
import styles from "../Styles";
import Header from "../Screens/Header";

export default function HomeScreen() {
  return (
    <View style={styles.headerContainer}>
      <Header />
    </View>
  );
}
