import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconName, textValue } = props;
  const { textStyle, iconTextWrapper } = styles;

  return (
    <View style={iconTextWrapper}>
      <Feather name={iconName} size={20} color="white" />
      <Text style={textStyle}>{textValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconTextWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  textStyle: {
    fontSize: 20,
    marginLeft: 5,
    color: "white",
  },
});

export default IconText;
