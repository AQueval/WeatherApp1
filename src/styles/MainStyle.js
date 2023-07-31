import { StatusBar, StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#2A2A2A",
  },
  imageLayout: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  screenWrapper: {
    backgroundColor: "#FDF6EF80",
    borderRadius: 10,
    padding: 10,
  },
});

export default mainStyles;
