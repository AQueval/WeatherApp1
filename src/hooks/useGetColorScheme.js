import React from "react";
import { useColorScheme } from "react-native";

export const useGetColorScheme = () => {
  const colorScheme = useColorScheme();

  return [colorScheme];
};
