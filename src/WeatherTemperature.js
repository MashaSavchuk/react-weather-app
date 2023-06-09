import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenfeit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        {" "}
        <span id="temperature">{Math.round(props.celsius)}</span>
        <span id="units">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFarenfeit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    // let farenhite = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        {" "}
        <span id="temperature">{Math.round(farenheit())}</span>
        <span id="units">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
