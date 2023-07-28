import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/WeatherType";
import mainStyles from "../styles/MainStyles";
import { useGetColorScheme } from "../hooks/useGetColorScheme";
import { useGetDeviceLanguage } from "../hooks/useGetDeviceLanguage";

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const CurrentWeather = ({ weatherData }) => {
  const [colorScheme] = useGetColorScheme();
  const languagePack = useGetDeviceLanguage()[0];

  const mainStylesObj = mainStyles();
  const styles = {
    ...mainStylesObj,
    ...additionalStyles,
  };

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <ImageBackground
          source={
            colorScheme === "dark"
              ? require("../../assets/current-background-dark.jpg")
              : require("../../assets/current-background-light.jpg")
          }
          style={styles.imageLayout}
        >
          <View
            style={[
              styles.screenWrapper,
              /*{ backgroundColor: weatherType[weatherCondition]?.backgroundColor, },*/
            ]}
          >
            <Feather
              name={weatherType[weatherCondition]?.icon}
              size={80}
              color="#000E2E"
              style={[styles.mainIcon, styles.mainFontStyle]}
            />
            <Text style={[styles.tempStyle, styles.mainFontStyle]}>
              {Math.round(temp)}°C
            </Text>
            <Text style={[styles.feels, styles.mainFontStyle]}>
              {languagePack["feelsLike"]}
              {` ${Math.round(feels_like)}`}°C
            </Text>
            <RowText
              textValue1={`${languagePack["low"]}: ${Math.round(temp_min)}°C`}
              separatorValue={""}
              textValue2={`${languagePack["high"]}: ${Math.round(temp_max)}°C`}
              text1Style={[styles.highLow, styles.lowStyle]}
              separatorStyle={styles.highLow}
              text2Style={[styles.highLow, styles.highStyle]}
            />
            <View style={[styles.bodyWrapper]}>
              <Text style={[styles.description, styles.mainFontStyle]}>
                {Capitalize(weather[0]?.description)}
              </Text>
              <Text style={[styles.message, styles.mainFontStyle]}>
                {weatherType[weatherCondition]?.message}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const additionalStyles = StyleSheet.create({
  mainIcon: {
    justifyContent: "center",
    alignSelf: "center",
  },
  tempStyle: {
    fontSize: 48,
    justifyContent: "center",
    alignSelf: "center",
  },
  feels: {
    fontSize: 30,
    justifyContent: "center",
    alignSelf: "center",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    fontSize: 20,
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
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
