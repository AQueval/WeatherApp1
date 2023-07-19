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
  const { name, cityName, countryName, riseSetWrapper } = styles;

  return (
    <SafeAreaView style={mainStyles.wrapper}>
      <View style={mainStyles.container}>
        <ImageBackground
          source={require("../../assets/city-background.png")}
          style={mainStyles.imageLayout}
        >
          <Text style={[name, cityName]}>Paris</Text>
          <Text style={[name, countryName]}>France</Text>
          <IconText iconName="users" textValue=" 2 106 091" />
          <View style={riseSetWrapper}>
            <IconText iconName="sunrise" textValue=" 06:54" />
            <IconText iconName="sunset" textValue=" 21:31" />
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
    color: "white",
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
});

export default City;
