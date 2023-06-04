import React from "react";
import ReactAnimatedWeather from "react-animated-weather-updated";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="goldenrod"
      size={64}
      animate={true}
    />
    // <img
    //   src="https://raw.githubusercontent.com/divyanshu013/react-animated-weather/HEAD/react-animated-weather.gif"
    //   alt="props.alt"
    // ></img>
  );
}
