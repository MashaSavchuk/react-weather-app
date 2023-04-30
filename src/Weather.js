import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconURL: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
    // setTemperature(response.data.temperature.current);
    // setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city... "
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <FormattedDate date={weatherData.date} />
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row weather-temperature">
          <div className="col-6 d-flex">
            <img src={weatherData.iconURL} alt={weatherData.description}></img>
            <div>
              <span id="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span id="units"> °C</span>
            </div>
          </div>
          <div className="col-6">
            {" "}
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "tec4bo8f19e07a3f36580cf013c346bf";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaulCity}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
