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
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
});

export default mainStyles;
