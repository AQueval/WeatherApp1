import { useGetDeviceLanguage } from "../hooks/useGetDeviceLanguage";

const languagePack = useGetDeviceLanguage()[0];

// Dynamic content and styling depending on weather type returned by API.
export const weatherType = {
  Thunderstorm: {
    icon: "zap",
    message: languagePack["weatherTypeThunderstormMessage"],
    backgroundColor: "#00000030",
  },
  Drizzle: {
    icon: "cloud-rain",
    message: languagePack["weatherTypeDrizzleMessage"],
    backgroundColor: "#36454f30",
  },
  Rain: {
    icon: "umbrella",
    message: languagePack["weatherTypeRainMessage"],
    backgroundColor: "#003ED030",
  },
  Snow: {
    icon: "cloud-snow",
    message: languagePack["weatherTypeSnowMessage"],
    backgroundColor: "#7f606530",
  },
  Clear: {
    icon: "sun",
    message: languagePack["weatherTypeClearMessage"],
    backgroundColor: "#e4720030",
  },
  Clouds: {
    icon: "cloud",
    message: languagePack["weatherTypeCloudsMessage"],
    backgroundColor: "#36363630",
  },
  Haze: {
    icon: "wind",
    message: languagePack["weatherTypeHazeMessage"],
    backgroundColor: "#58586e30",
  },
  Mist: {
    icon: "align-justify",
    message: languagePack["weatherTypeMistMessage"],
    backgroundColor: "#3e3e3730",
  },
};
