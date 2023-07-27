import { StatusBar, StyleSheet } from "react-native";
import { useGetColorScheme } from "../hooks/useGetColorScheme";

const darkStyles = StyleSheet.create({
  themeFontStyle: {
    color: "#FDF6EF",
  },
  themeBackgroundStyle: {
    backgroundColor: "#000E2E90",
  },
});

const lightStyles = StyleSheet.create({
  themeFontStyle: {
    color: "#000E2E",
  },
  themeBackgroundStyle: {
    backgroundColor: "#FDF6EF90",
  },
});

const mainStyles = () => {
  const [colorScheme] = useGetColorScheme();
  const styles = colorScheme === "dark" ? darkStyles : lightStyles;

  return StyleSheet.create({
    wrapper: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
      flex: 1,
      paddingTop: 15,
      paddingBottom: 10,
      paddingHorizontal: 10,
    },
    screenWrapper: {
      borderRadius: 10,
      padding: 10,
      ...styles.themeBackgroundStyle,
    },
    container: {
      flex: 1,
    },
    mainFontStyle: {
      ...styles.themeFontStyle,
    },
  });
};

export default mainStyles;
