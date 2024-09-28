import React, { useState } from "react";
import axios from "axios";
import './style.css';
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [name, setName] = useState(props.defaultCity);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(""); 
  let [date, setDate] = useState(null);
  let [coord1, setCoord1] = useState(null);
  let [coord2, setCoord2] = useState(null);

  // Function to handle the API response and update the state
  function showTemp(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setDate(new Date(response.data.dt * 1000));
    setCoord1(response.data.coord.lat);
    setCoord2(response.data.coord.lon);
  }

  // Function to fetch weather data for the current city
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=88724523008dc9e1be18f6eb6a959b67&units=metric`;
    axios.get(url).then(showTemp);
  }

  // Handle form submission (user input)
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  // Update the city name when the user types in the input field
  function updateUsername(event) {
    setName(event.target.value);
  }

  // Format the date
  function formatDate(date) {
    let hour = date.getHours();
    let minute = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hour}:${minute}`;
  }

  // Automatically fetch weather for the default city if the temperature is still null (first render)
  if (temperature === null) {
    search();  // Fetch the weather for the default city
    return <div>Loading...</div>;  // While waiting for the data, display "Loading..."
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            className="form-control"
            required
            placeholder="Enter a city"
            onChange={updateUsername}
            value={name}
          />
        </div>
        <div className="col-3 p-0">
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-6" id="t_all">
          <ul className="text">
            <li id="city">{name}</li>
            <li id="time">
              {date && formatDate(date)}, {description}
            </li>
            <li>
              Humidity: <strong id="humidity">{humidity}</strong>% , Wind:{" "}
              <strong id="wind">{wind}</strong> km/h
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <span id="icon">
              <WeatherIcon state={icon} width={100} height={100} />
            </span>
            <span id="degree">{temperature} </span>
            {temperature && <span id="c">°C</span>}
          </div>
        </div>
      </div>

      <WeatherForecast city1={coord1} city2={coord2} />
    </form>
  );
}
