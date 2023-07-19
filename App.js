import React from "react";
import { View } from "react-native";
import City from "./src/screens/City";
import mainStyles from "./src/styles/MainStyle";
import CurrentWeather from "./src/screens/CurrentWeather";

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
