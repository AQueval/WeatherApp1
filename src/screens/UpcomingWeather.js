import React from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import ListItem from "../components/ListItem";
import mainStyles from "../styles/MainStyle";

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const {} = styles;

  return (
    <SafeAreaView style={mainStyles.wrapper}>
      <View style={mainStyles.container}>
        <ImageBackground
          source={require("../../assets/upcoming-background.png")}
          style={mainStyles.imageLayout}
        >
          <View style={mainStyles.screenWrapper}>
            <FlatList
              data={weatherData}
              renderItem={renderItem}
              keyExtractor={(item) => item.dt_txt}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default UpcomingWeather;
