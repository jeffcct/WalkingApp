import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },

  // Header styles
  headerContainer: {
    backgroundColor: "#3ba7ff",
    padding: 20,
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  headerTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  statBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  statValue: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
});

export default styles;
