import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconName, iconColor, textValue, bodyTextStyle } = props;
  const { textStyle, iconTextWrapper } = styles;

  return (
    <View style={iconTextWrapper}>
      <Feather name={iconName} size={22} color={iconColor} />
      <Text style={[textStyle, bodyTextStyle]}>{textValue}</Text>
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
    marginLeft: 10,
  },
});

export default IconText;
