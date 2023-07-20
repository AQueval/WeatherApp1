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
import RowText from "../components/RowText";

const CurrentWeather = () => {
  const { temp, feels, highLow, bodyWrapper, description, message, mainIcon } =
    styles;

  return (
    <SafeAreaView style={mainStyles.wrapper}>
      <View style={mainStyles.container}>
        <ImageBackground
          source={require("../../assets/current-background-2.jpg")}
          style={mainStyles.imageLayout}
        >
          <View style={mainStyles.screenWrapper}>
            <Feather name="sun" size={80} color="#000E2E" style={mainIcon} />
            <Text style={temp}>6</Text>
            <Text style={feels}>Feels like 5</Text>
            <RowText
              textValue1="High: 8"
              textValue2="Low: 6"
              bodyTextStyle={highLow}
            />
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
  mainIcon: {
    justifyContent: "center",
    alignSelf: "center",
  },
  temp: {
    fontSize: 48,
    color: "#000E2E",
    justifyContent: "center",
    alignSelf: "center",
  },
  feels: {
    fontSize: 30,
    color: "#000E2E",
    justifyContent: "center",
    alignSelf: "center",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    fontSize: 20,
    color: "#000E2E",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  description: {
    fontSize: 48,
    color: "#000E2E",
  },
  message: {
    fontSize: 30,
    color: "#000E2E",
  },
});
export default CurrentWeather;
