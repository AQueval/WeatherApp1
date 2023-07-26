import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RowText = (props) => {
  const {
    textValue1,
    separatorValue,
    textValue2,
    text1Style,
    separatorStyle,
    text2Style,
  } = props;
  const { rowTextWrapper } = styles;

  return (
    <View style={rowTextWrapper}>
      <Text style={text1Style}>{textValue1}</Text>
      <Text style={separatorStyle}>{separatorValue}</Text>
      <Text style={text2Style}>{textValue2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowTextWrapper: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RowText;
