import React from "react";

import { MdiThermometerWater as WaterTh } from "../icons/Thermometer";
import { UilRaindropsAlt as Raindrops } from "../icons/Raindrops";
import { MingcuteWindLine as Wind } from "../icons/Wind";

export default function DataCountry({ dataCity }) {
  const iconWeather = `http://openweathermap.org/img/w/${dataCity.weather[0].icon}.png`;

  return (
    <>
      <section className="country">
        <img id="iconWeather" src={iconWeather} alt="Sun" />
        <p>{dataCity.weather[0].description}</p>
        <h1>{dataCity["main"].temp} °C</h1>
        <h2>
          {dataCity.name} - {dataCity["sys"].country}
        </h2>
        <p>
          Max.: {dataCity["main"].temp_max}° Min.: {dataCity["main"].temp_min}°
        </p>
      </section>
      <section className="statistics">
        <ul>
          <li>
            <Raindrops />
          </li>
          <li>6%</li>
        </ul>
        <ul>
          <li>
            <WaterTh />
          </li>
          <li>{dataCity["main"].humidity}%</li>
        </ul>
        <ul>
          <li>
            <Wind />
          </li>
          <li>{dataCity["wind"].speed} km/h</li>
        </ul>
      </section>
    </>
  );
}
