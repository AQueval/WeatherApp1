import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconText from "../components/IconText";
import mainStyles from "../styles/MainStyle";
import moment from "moment";

const City = ({ weatherData }) => {
  const {
    nameStyle,
    cityName,
    countryName,
    riseSetWrapper,
    populationText,
    riseSetText,
  } = styles;
  const { name, country, population, sunrise, sunset } = weatherData;

  return (
    <SafeAreaView style={mainStyles.wrapper}>
      <View style={mainStyles.container}>
        <ImageBackground
          source={require("../../assets/city-background.png")}
          style={mainStyles.imageLayout}
        >
          <View style={mainStyles.screenWrapper}>
            <Text style={[nameStyle, cityName]}>{name}</Text>
            <Text style={[nameStyle, countryName]}>{country}</Text>
            <IconText
              iconName="users"
              iconColor="#000E2E"
              textValue={population}
              bodyTextStyle={populationText}
            />
            <View style={riseSetWrapper}>
              <IconText
                iconName="sunrise"
                iconColor="#000E2E"
                textValue={moment.unix(sunrise).format("HH:mm")}
                bodyTextStyle={riseSetText}
              />
              <IconText
                iconName="sunset"
                iconColor="#000E2E"
                textValue={moment.unix(sunset).format("HH:mm")}
                bodyTextStyle={riseSetText}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nameStyle: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "#000E2E",
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
    color: "#000E2E",
    fontSize: 20,
  },
  riseSetText: {
    color: "#000E2E",
    fontSize: 20,
  },
});

export default City;
