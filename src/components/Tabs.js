import React from "react";
import City from "../screens/City";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  const {} = styles;

  return (
    <Tab.Navigator
      initialRouteName="Current"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#93E4FF",
        tabBarInactiveTintColor: "#FDF6EF",
        tabBarStyle: {
          backgroundColor: "#000E2E",
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="sun"
              size={25}
              color={focused ? "#93E4FF" : "#FDF6EF"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={"Upcoming"}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="calendar"
              size={25}
              color={focused ? "#48B9FF" : "#FDF6EF"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"City"}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="city-variant-outline"
              size={25}
              color={focused ? "#48B9FF" : "#FDF6EF"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Tabs;
