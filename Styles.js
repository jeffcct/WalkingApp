import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  historycontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },

  // common Header styles
  headerContainer: {
    backgroundColor: "#97B1A6",
    padding: 20,
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },

  // Home Header styles
  statsHeaderHome: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    top: 5,
  },
  statBoxHeaderHome: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  statLabelHistory: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  statValueHeaderHistory: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },

  // History styles
  historyTitle: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginBottom: 20,
    top: 13,
  },
  historycontainer: {
    flex: 1,
    backgroundColor: "#CFDBD5",
  },
  contentContainer: {
    padding: 20,
  },
  historyHeader: {
    backgroundColor: "#3a7bd5",
    padding: 20,
    alignItems: "center",
  },
  headerTitleHistory: {
    color: "black",
    fontSize: 24,
    fontWeight: "700",
  },
  statsSummaryHistory: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    margin: 20,
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    marginTop: 100,
  },
  monthTitleHistory: {
    fontSize: 18,
    color: "#3a7bd5",
    marginBottom: 10,
    fontWeight: "bold",
  },
  statsGridHistory: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItemHistory: {
    alignItems: "center",
  },
  statLabelHistory: {
    fontSize: 12,
    color: "#6c757d",
  },
  statValueHeaderHistory: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  runItemHistory: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  runHeaderHistory: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  runTitleHistory: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  runDateHistory: {
    fontSize: 14,
    color: "#6c757d",
  },
  runStatsHistory: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  runStatHistory: {
    alignItems: "center",
  },

  // Challenges styles
  challengesTitle: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginBottom: 20,
    top: 13,
  },

  // Profile styles
  profileTitle: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginBottom: 20,
    top: 13,
  },
});

export default styles;
