import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconText from "../components/IconText";
import mainStyles from "../styles/MainStyles";
import moment from "moment";
import { useGetColorScheme } from "../hooks/useGetColorScheme";

const City = ({ weatherData }) => {
  const [colorScheme] = useGetColorScheme();

  const mainStylesObj = mainStyles();
  const styles = {
    ...mainStylesObj,
    ...additionalStyles,
  };

  const { name, country, population, sunrise, sunset } = weatherData;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <ImageBackground
          source={
            colorScheme === "dark"
              ? require("../../assets/city-background-dark.png")
              : require("../../assets/city-background-light.png")
          }
          style={styles.imageLayout}
        >
          <View style={styles.screenWrapper}>
            <Text style={[styles.nameStyle, styles.cityName]}>{name}</Text>
            <Text style={[styles.nameStyle, styles.countryName]}>
              {country}
            </Text>
            <IconText
              iconName="users"
              iconColor="#000E2E"
              textValue={population}
              bodyTextStyle={styles.populationText}
            />
            <View style={styles.riseSetWrapper}>
              <IconText
                iconName="sunrise"
                iconColor="#000E2E"
                textValue={moment.unix(sunrise).format("HH:mm")}
                bodyTextStyle={styles.riseSetText}
              />
              <IconText
                iconName="sunset"
                iconColor="#000E2E"
                textValue={moment.unix(sunset).format("HH:mm")}
                bodyTextStyle={styles.riseSetText}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const additionalStyles = StyleSheet.create({
  nameStyle: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  populationText: {
    fontSize: 20,
  },
  riseSetText: {
    fontSize: 20,
  },
});

export default City;
