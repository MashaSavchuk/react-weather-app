import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      {" "}
      <h1>{props.data.city}</h1>
      <ul>
        <FormattedDate date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row weather-temperature">
        <div className="col-6 d-flex">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          {/* <img src={props.data.iconURL} alt={props.data.description}></img> */}
          <div>
            <span id="temperature">{Math.round(props.data.temperature)}</span>
            <span id="units"> °C</span>
          </div>
        </div>
        <div className="col-6">
          {" "}
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
