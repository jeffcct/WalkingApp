import React from "react";
import { View, Text } from "react-native";
import styles from "../Styles";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Walking App</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Distance</Text>
          <Text style={styles.statValue}>0.00 km</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Time</Text>
          <Text style={styles.statValue}>00:00:00</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Pace</Text>
          <Text style={styles.statValue}>0'00"/km</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
