import React from "react";
import { View, Text } from "react-native";
import styles from "../Styles";

export default function ProfileScreen() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.profileTitle}>Profile</Text>
    </View>
  );
}
