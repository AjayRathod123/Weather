// api.openweathermap.org/data/2.5/weather?q=mumbai&appid=aa03070fc7947651ab48b1a63b748bfe

import React, { useEffect, useState } from "react";
import "./temp.css";
import WeatherCard from "./weatherCard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("mumbai");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=aa03070fc7947651ab48b1a63b748bfe`;

      const res = await fetch(url);
      const data = await res.json();

      const { temp, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className="main__temp">
      <div className="temp__search">
        <input
          type="seach"
          placeholder="Enter Your City Name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="temp__button" onClick={getWeatherInfo}>
          Search
        </button>
      </div>
      <WeatherCard tempInfo={tempInfo} />
    </div>
  );
};

export default Temp;
