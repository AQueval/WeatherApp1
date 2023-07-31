import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/WeatherType";
import moment from "moment";
import RowText from "./RowText";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, timeStyle, temp, tempMin, tempMax } = styles;

  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color="#000E2E" />
      <Text style={timeStyle}>{moment(dt_txt).format("HH:mm")}</Text>
      <View>
        <RowText
          textValue1={`${Math.round(min)}°C`}
          separatorValue={" / "}
          textValue2={`${Math.round(max)}°C`}
          text1Style={[temp, tempMin]}
          separatorStyle={temp}
          text2Style={[temp, tempMax]}
        />
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
    justifyContent: "space-between",
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
  timeStyle: {
    color: "#000E2E",
    fontSize: 20,
  },
});

export default ListItem;
