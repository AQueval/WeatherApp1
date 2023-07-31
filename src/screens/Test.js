import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import mainStyles from "../styles/MainStyle";

const Test = () => {
  const { imageLayout, testAlignItems, textStyle } = styles;

  return (
    <SafeAreaView style={mainStyles.wrapper}>
      <View style={mainStyles.container}>
        <ImageBackground
          source={require("../../assets/city-background.png")}
          style={imageLayout}
        >
          <Text style={textStyle}>Lorem ipsum</Text>
        </ImageBackground>
        {/*<Text style={textStyle}>Lorem ipsum</Text>*/}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageLayout: {
    flex: 1,
    justifyContent: "center",
  },
  testAlignItems: {},
  textStyle: {
    fontSize: 25,
    backgroundColor: "cyan",
  },
});

export default Test;
