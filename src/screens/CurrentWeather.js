import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import mainStyles from "../styles/MainStyle";

const CurrentWeather = () => {
  const {
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    screenWrapper,
  } = styles;

  return (
    <SafeAreaView style={mainStyles.wrapper}>
      <View style={mainStyles.container}>
        <ImageBackground
          source={require("../../assets/current-background.png")}
          style={mainStyles.imageLayout}
        >
          <View style={screenWrapper}>
            <Feather name="sun" size={100} color="black" />
            <Text style={temp}>6</Text>
            <Text style={feels}>Feels like 5</Text>
            <View style={highLowWrapper}>
              <Text style={highLow}>High: 8 </Text>
              <Text style={highLow}>Low: 6</Text>
            </View>
            <View style={bodyWrapper}>
              <Text style={description}>It's sunny</Text>
              <Text style={message}>It's perfect t-shirt weather</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    alignItems: "center",
  },
  temp: {
    fontSize: 48,
    color: "black",
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    fontSize: 20,
    color: "black",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
export default CurrentWeather;
