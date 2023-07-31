import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ErrorItem = () => {
  const { container, errorMessage } = styles;

  return (
    <View style={container}>
      <MaterialIcons name="error-outline" size={70} color="#FDF6EF" />
      <Text style={errorMessage}>Sorry, something went wrong</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DF1600",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  errorMessage: {
    color: "#FDF6EF",
    fontSize: 30,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});

export default ErrorItem;
