import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
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
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "Granted.") {
        setError("Permission to access location was denied.");
      }

      //get current location donne null donc valeur fixe pour avancer avant debug (erreur Xiaomi)
      /*let location = await Location.getCurrentPositionAsync({});*/
      /*let location = await Location.getLastKnownPositionAsync({});*/
      /*setLoading(location);*/
      let location = {
        latitude: "45.750000",
        longitude: "4.850000",
      };
      setLat(location.latitude);
      setLon(location.longitude);
      await fetchWeatherData();
      //setLoading(false);
    })();
  }, [lat, lon]);

  /*if (weather) {
                console.log("Latitude : " + lat);
                console.log("Longitude : " + lon);
                console.log("Weather : " + weather);
              } else {
                console.log("No weather available.");
              }

              console.log("API key : " + WEATHER_API_KEY);*/

  return [loading, error, weather];
};
