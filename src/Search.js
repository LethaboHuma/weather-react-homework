import "./index.css";
import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [temperature, setTemperature] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    setSearchCity(city);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(function (response) {
      setTemperature(response.data.main.temp);
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={updateCity}
          placeholder="Type a city"
        />
        <input type="submit" value="Search" />
      </form>
      {searchCity.length > 0 && (
        <h2>
          The temperature in {searchCity} is currently{" "}
          {temperature ? Math.round(temperature) + "°C" : "loading..."}
        </h2>
      )}
    </div>
  );
}
