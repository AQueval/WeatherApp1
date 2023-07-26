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
import { weatherType } from "../utilities/WeatherType";

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const CurrentWeather = ({ weatherData }) => {
  const {
    tempStyle,
    feels,
    highLow,
    bodyWrapper,
    description,
    message,
    mainIcon,
    lowStyle,
    highStyle,
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView style={mainStyles.wrapper}>
      <View style={mainStyles.container}>
        <ImageBackground
          source={require("../../assets/current-background-2.jpg")}
          style={mainStyles.imageLayout}
        >
          <View
            style={[
              mainStyles.screenWrapper,
              {
                backgroundColor: weatherType[weatherCondition]?.backgroundColor,
              },
            ]}
          >
            <Feather
              name={weatherType[weatherCondition]?.icon}
              size={80}
              color="#000E2E"
              style={mainIcon}
            />
            <Text style={tempStyle}>{Math.round(temp)}°C</Text>
            <Text style={feels}>
              {`Feels like ${Math.round(feels_like)}`}°C
            </Text>
            <RowText
              textValue1={`Low: ${Math.round(temp_min)}°C`}
              separatorValue={""}
              textValue2={`High: ${Math.round(temp_max)}°C`}
              text1Style={[highLow, lowStyle]}
              separatorStyle={highLow}
              text2Style={[highLow, highStyle]}
            />
            <View style={bodyWrapper}>
              <Text style={description}>
                {Capitalize(weather[0]?.description)}
              </Text>
              <Text style={message}>
                {weatherType[weatherCondition]?.message}
              </Text>
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
  tempStyle: {
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
  lowStyle: {
    color: "#003ED0",
  },
  highStyle: {
    color: "#DF1600",
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
