import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [temperature, setTeperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  function handleTemp(response) {
    setTeperature(response.data.main.temp);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setDescription(response.data.weather[0].description);
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=krugersdorp
  &appid=210d99196a88b9257ed8cb3535a0a0c5&units=metric`;
  axios.get(url).then(handleTemp);

  function handleSearch(event) {
    event.preventDefault();
  }
  function handleSubmit(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onClick={handleSearch}>
        <input
          type="search"
          place
          holder="Enter a city..."
          onChange={handleSubmit}
          className="first"
        />
        <input type="submit" value="search" className="second" />
      </form>
      <h4>Johannesburg {city}</h4>

      <div>
        Thursday 12:15
        <div>{description}</div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={icon} alt={description} />
            <span className="degree">{Math.round(temperature)}</span>
          </div>
          <div className="col-sm-6">
            <div className="humidity">humidity :{humidity}%</div>
            <div className="wind">wind :{wind}km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
