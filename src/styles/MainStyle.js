import { StatusBar, StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
  },
  imageLayout: {
    flex: 1,
    paddingTop: 50,
  },
});

export default mainStyles;
