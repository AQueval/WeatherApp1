import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
  const { activityIndicatorStyle } = styles;
  const [loading, error, weather] = useGetWeather();

  /*console.log("Loading data : " + loading);
    console.log("Error data : " + error);
    console.log("Weather data : " + weather);*/

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={activityIndicatorStyle}>
      <ActivityIndicator size={50} color={"#003ED0"} />
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
