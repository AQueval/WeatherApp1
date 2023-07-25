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
import mainStyles from "../styles/MainStyle";
import moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

const UpcomingWeather = ({ weatherData }) => {
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
    <View>
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
    <SafeAreaView style={mainStyles.wrapper}>
      <View style={mainStyles.container}>
        <ImageBackground
          source={require("../../assets/upcoming-background.png")}
          style={mainStyles.imageLayout}
        >
          <View style={mainStyles.screenWrapper}>
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

const styles = StyleSheet.create({
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 16,
    textTransform: "capitalize",
  },
});

export default UpcomingWeather;
