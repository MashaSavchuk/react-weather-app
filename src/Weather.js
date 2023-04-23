import React from "react";
import "./Weather.css";

export default function Weather() {
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

      <h1>New York</h1>
      <ul>
        <li>Sunday 16:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row weather-temperature">
        <div className="col-6 d-flex">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt=""
          ></img>
          <div>
            <span id="temperature">6</span>
            <span id="units"> °C</span>
          </div>
        </div>
        <div className="col-6">
          {" "}
          <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity: 38%</li>
            <li>Wind: 8 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
