import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { WEATHER_API_KEY } from "@env";
import { useGetDeviceLanguage } from "./useGetDeviceLanguage";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const deviceLanguage = useGetDeviceLanguage()[1];

  // API call with variables for location, API key and language.
  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=${deviceLanguage}`,
      );
      const data = await res.json();
      setWeather(data);
    } catch (e) {
      setError("Could not fetch weather.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      // Request user's authorization to access device location.
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setError("Permission to access location was denied.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);

      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading, error, weather];
};
