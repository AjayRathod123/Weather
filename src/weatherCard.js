import React from "react";

const WeatherCard = ({ tempInfo }) => {
  const { temp, pressure, weathermood, name, speed, country, sunset } =
    tempInfo;

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="temp__info">
        <div className="temp__icon">
          <i className="fas fa-cloud-sun"></i>
        </div>
        <div className="temp__details">
          <h1 className="temp__degree">{temp}</h1>
          <div className="temp__allCondition">
            <h3 className="temp__condition">{weathermood}</h3>
            <p className="temp__city">
              {name},{country}
            </p>
          </div>
        </div>
        <div className="temp__addDetails">
          <div className="sunset">
            <i
              className="fas fa-sun"
              style={{ color: "aqua", fontSize: "30px" }}
            ></i>
            <p>{timeStr} PM</p>
            <p>Sunset</p>
          </div>
          <div className="pressure">
            <i
              className="fas fa-cloud-showers-heavy"
              style={{ color: "aqua", fontSize: "30px" }}
            ></i>
            <p>Pressure</p>
            <p>{pressure} MM</p>
          </div>
          <div className="wind">
            <i
              className="fas fa-wind"
              style={{ color: "aqua", fontSize: "30px" }}
            ></i>
            <p>Wind</p>
            <p>{speed}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
