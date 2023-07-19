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

const City = () => {
  const {
    name,
    cityName,
    countryName,
    riseSetWrapper,
    populationText,
    riseSetText,
  } = styles;

  return (
    <SafeAreaView style={mainStyles.wrapper}>
      <View style={mainStyles.container}>
        <ImageBackground
          source={require("../../assets/city-background.png")}
          style={mainStyles.imageLayout}
        >
          <View style={mainStyles.screenWrapper}>
            <Text style={[name, cityName]}>Paris</Text>
            <Text style={[name, countryName]}>France</Text>
            <IconText
              iconName="users"
              iconColor="black"
              textValue="2 106 091"
              bodyTextStyle={populationText}
            />
            <View style={riseSetWrapper}>
              <IconText
                iconName="sunrise"
                iconColor="black"
                textValue="06:54"
                bodyTextStyle={riseSetText}
              />
              <IconText
                iconName="sunset"
                iconColor="black"
                textValue="21:31"
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
  name: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
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
    color: "black",
    fontSize: 20,
  },
  riseSetText: {
    color: "black",
    fontSize: 20,
  },
});

export default City;
