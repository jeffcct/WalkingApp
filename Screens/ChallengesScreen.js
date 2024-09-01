import React from "react";
import { View, Text } from "react-native";
import styles from "../Styles";

export default function ChallengesScreen() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.challengesTitle}>Challenges</Text>
    </View>
  );
}
