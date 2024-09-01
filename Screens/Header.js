import React from "react";
import { View, Text } from "react-native";
import styles from "../Styles";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitleHistory}>RunLock</Text>
      <View style={styles.statsHeaderHome}>
        <View style={styles.statBoxHeaderHome}>
          <Text style={styles.statLabelHistory}>Distance</Text>
          <Text style={styles.statValueHeaderHistory}>0.00 km</Text>
        </View>
        <View style={styles.statBoxHeaderHome}>
          <Text style={styles.statLabelHistory}>Time</Text>
          <Text style={styles.statValueHeaderHistory}>00:00:00</Text>
        </View>
        <View style={styles.statBoxHeaderHome}>
          <Text style={styles.statLabelHistory}>Pace</Text>
          <Text style={styles.statValueHeaderHistory}>0'00"/km</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
