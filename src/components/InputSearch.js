import React, { useEffect, useState } from "react";
import axios from "axios";

const InputSearch = () => {
  const [typeCity, setTypeCity] = useState("");
  const [city, setCity] = useState("");

  const [cityName, setCityName] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");

  const API_KEY = "056359a9661c57c5e97c82b188f9f062";

  useEffect( () => {
    if (!city) {
      return;
    }

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.weather[0].main);

        setCityName(data.name);
        setTemp(data.main.temp);
        setWeather(data.weather[0].main)

        return data;
      })
      .catch((err) => {
        console.log("Error", err);
      });

    
  }, [city]);

  function handleEnter(e) {
    if (e.keyCode !== 13) {
      return;
    }
    setCity(typeCity);
    setTypeCity("");
  }
  return (
    <div>
      <input
        className="search"
        value={typeCity}
        onChange={(e) => {
          setTypeCity(e.target.value);
        }}
        onKeyDown={handleEnter}
      ></input>
      {
        city && <div className="weather" >
            <h2>{cityName}</h2>
            <h1>{temp} F</h1>
            <p> {weather} </p>
        </div>
      }
    </div>
  );
};

export default InputSearch;
