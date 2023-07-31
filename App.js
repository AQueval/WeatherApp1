import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import ErrorItem from "./src/components/ErrorItem";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
  const { activityIndicatorStyle } = styles;
  const [loading, error, weather] = useGetWeather();

  // Render Tabs only if weather data is available and app isn't loading.
  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  // By default, render error message if an error exists. Otherwise render loading animation.
  return (
    <View style={activityIndicatorStyle}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={50} color={"#003ED0"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default App;

// Test commit #1
