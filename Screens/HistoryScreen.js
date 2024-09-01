import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../Styles";

export default function HistoryScreen() {
  // sample run data
  const runData = [
    {
      id: 1,
      date: "2024-05-15",
      distance: 5.2,
      time: "00:28:45",
      pace: "5:31",
    },
    {
      id: 2,
      date: "2024-05-13",
      distance: 8.7,
      time: "00:49:12",
      pace: "5:39",
    },
    {
      id: 3,
      date: "2024-05-10",
      distance: 6.3,
      time: "00:34:56",
      pace: "5:33",
    },
    {
      id: 4,
      date: "2024-05-07",
      distance: 10.5,
      time: "00:59:30",
      pace: "5:40",
    },
    {
      id: 5,
      date: "2024-05-04",
      distance: 7.8,
      time: "00:43:12",
      pace: "5:32",
    },
    {
      id: 6,
      date: "2024-05-02",
      distance: 5.2,
      time: "00:30:25",
      pace: "6:31",
    },
    {
      id: 7,
      date: "2024-05-01",
      distance: 3.9,
      time: "00:20:31",
      pace: "5:50",
    },
  ];

  return (
    <ScrollView
      style={styles.historycontainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.historyTitle}>Run History</Text>
      </View>

      <View style={styles.statsSummaryHistory}>
        <Text style={styles.monthTitleHistory}>This Month</Text>
        <View style={styles.statsGridHistory}>
          <View style={styles.statItemHistory}>
            <Text style={styles.statLabelHistory}>Total Runs</Text>
            <Text style={styles.statValueHeaderHistory}>{runData.length}</Text>
          </View>
          <View style={styles.statItemHistory}>
            <Text style={styles.statLabelHistory}>Total Distance</Text>
            <Text style={styles.statValueHeaderHistory}>47.6 km</Text>
          </View>
          <View style={styles.statItemHistory}>
            <Text style={styles.statLabelHistory}>Total Time</Text>
            <Text style={styles.statValueHeaderHistory}>4h 25m</Text>
          </View>
        </View>
      </View>

      {runData.map((run) => (
        <View key={run.id} style={styles.runItemHistory}>
          <View style={styles.runHeaderHistory}>
            <Text style={styles.runTitleHistory}>Run #{run.id}</Text>
            <Text style={styles.runDateHistory}>{run.date}</Text>
          </View>
          <View style={styles.runStatsHistory}>
            <View style={styles.runStatHistory}>
              <Text style={styles.statLabelHistory}>Distance</Text>
              <Text style={styles.statValueHeaderHistory}>
                {run.distance} km
              </Text>
            </View>
            <View style={styles.runStatHistory}>
              <Text style={styles.statLabelHistory}>Time</Text>
              <Text style={styles.statValueHeaderHistory}>{run.time}</Text>
            </View>
            <View style={styles.runStatHistory}>
              <Text style={styles.statLabelHistory}>Pace</Text>
              <Text style={styles.statValueHeaderHistory}>{run.pace} /km</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
