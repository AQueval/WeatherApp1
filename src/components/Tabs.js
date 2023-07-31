import React from "react";
import City from "../screens/City";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetColorScheme } from "../hooks/useGetColorScheme";
import { useGetDeviceLanguage } from "../hooks/useGetDeviceLanguage";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  // Handle device's light or dark theme to adapt app style.
  const [colorScheme] = useGetColorScheme();

  // Handle device's language to adapt app translation.
  const languagePack = useGetDeviceLanguage()[0];

  return (
    <Tab.Navigator
      initialRouteName="Current"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colorScheme === "dark" ? "#93E4FF" : "#DF1600",
        tabBarInactiveTintColor: colorScheme === "dark" ? "#FDF6EF" : "#000E2E",
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#000E2E" : "#FDF6EF",
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name={languagePack["current"]}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="sun"
              size={25}
              color={
                focused
                  ? colorScheme === "dark"
                    ? "#93E4FF"
                    : "#DF1600"
                  : colorScheme === "dark"
                  ? "#FDF6EF"
                  : "#000E2E"
              }
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={languagePack["upcoming"]}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="calendar"
              size={25}
              color={
                focused
                  ? colorScheme === "dark"
                    ? "#93E4FF"
                    : "#DF1600"
                  : colorScheme === "dark"
                  ? "#FDF6EF"
                  : "#000E2E"
              }
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={languagePack["city"]}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="city-variant-outline"
              size={25}
              color={
                focused
                  ? colorScheme === "dark"
                    ? "#93E4FF"
                    : "#DF1600"
                  : colorScheme === "dark"
                  ? "#FDF6EF"
                  : "#000E2E"
              }
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
