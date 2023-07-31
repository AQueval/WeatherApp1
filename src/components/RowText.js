import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RowText = (props) => {
  const { textValue1, textValue2, bodyTextStyle } = props;
  const { rowTextWrapper } = styles;

  return (
    <View style={rowTextWrapper}>
      <Text style={bodyTextStyle}>{textValue1}</Text>
      <Text style={bodyTextStyle}>{textValue2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowTextWrapper: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
});

export default RowText;
