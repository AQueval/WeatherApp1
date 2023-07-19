import React from "react";
import { View } from "react-native";
import City from "./src/screens/City";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import mainStyles from "./src/styles/MainStyle";

const App = () => {
  return (
    <View style={mainStyles.container}>
      <CurrentWeather />
      {/*<UpcomingWeather />*/}
      {/*<City />*/}
      {/*<Test />*/}
    </View>
  );
};

export default App;
