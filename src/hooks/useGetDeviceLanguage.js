import React from "react";
import { getLocales } from "expo-localization";
import fr from "../translation/fr.json";
import en from "../translation/en.json";

export const useGetDeviceLanguage = () => {
  const deviceLanguage = getLocales()[0].languageCode;

  // English language is used by default.
  const languagePack = deviceLanguage === "fr" ? fr : en;

  return [languagePack, deviceLanguage];
};
