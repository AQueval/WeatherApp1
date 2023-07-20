import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = (props) => {
  const { dt_txt, min, max } = props;
  const { item, date, temp, tempMin, tempMax } = styles;

  return (
    <View style={item}>
      <Feather name="sun" size={50} color="#000E2E" />
      <Text style={date}>{dt_txt}</Text>
      <View>
        <Text style={[temp, tempMin]}>{min}</Text>
        <Text style={[temp, tempMax]}>{max}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#FDF6EF",
  },
  temp: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tempMin: {
    color: "#003ED0",
  },
  tempMax: {
    color: "#DF1600",
  },
  date: {
    color: "#000E2E",
    fontSize: 18,
  },
});

export default ListItem;
