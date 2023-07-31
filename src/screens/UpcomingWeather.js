import React from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ListItem from "../components/ListItem";
import mainStyles from "../styles/MainStyles";
import moment from "moment";
import "moment/locale/fr";
import { useGetColorScheme } from "../hooks/useGetColorScheme";
import { useGetDeviceLanguage } from "../hooks/useGetDeviceLanguage";

// Translation handling including Moment.js for date formatting.
const deviceLanguage = useGetDeviceLanguage()[1];
moment.locale(deviceLanguage);

const UpcomingWeather = ({ weatherData }) => {
  const [colorScheme] = useGetColorScheme();

  const mainStylesObj = mainStyles();
  const styles = {
    ...mainStylesObj,
    ...additionalStyles,
  };

  // Group hourly weather data by day for better readability.
  const groupWeatherDataByDay = (weatherData) => {
    return weatherData.reduce((groupedData, item) => {
      const day = moment(item.dt_txt).format("YYYY-MM-DD");
      if (!groupedData[day]) {
        groupedData[day] = [];
      }
      groupedData[day].push(item);
      return groupedData;
    }, {});
  };

  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0]?.main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const renderGroup = ({ item }) => (
    <View style={[styles.screenWrapper, styles.dayWrapper]}>
      <Text style={styles.dayText}>
        {moment(item[0].dt_txt).format("dddd")}
      </Text>
      <FlatList
        data={item}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </View>
  );

  const groupedWeatherData = groupWeatherDataByDay(weatherData);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <ImageBackground
          source={
            colorScheme === "dark"
              ? require("../../assets/upcoming-background-dark.png")
              : require("../../assets/upcoming-background-light.png")
          }
          style={styles.imageLayout}
        >
          <View>
            <FlatList
              data={Object.values(groupedWeatherData)}
              renderItem={renderGroup}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const additionalStyles = StyleSheet.create({
  dayText: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 16,
    textTransform: "capitalize",
  },
  dayWrapper: {
    marginBottom: 20,
  },
});

export default UpcomingWeather;
