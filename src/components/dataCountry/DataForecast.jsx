import React from "react";

import { LucideCalendarDays as Calendar } from "../icons/Calendar";

const weekDays = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
export default function DataForecast({ dataForecast }) {
  const dayWeek = new Date().getDay();
  const forecastWeekDays = weekDays
    .slice(dayWeek, weekDays.length)
    .concat(weekDays.slice(2, 2));

  if (!dataForecast) return <div />;
  return (
    <>
      <div className="container-forecast">
        <section className="forecast-today">
          <div className="today-header">
            <h3>Today</h3>
          </div>
          {dataForecast.list.slice(0, 4).map((forecast, idx) => (
            <article className="item-today" key={idx}>
              <p>{Math.round(forecast["main"].temp_max)}° C</p>
              <img
                src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                alt={forecast.weather[0].description}
              />

              <p></p>
            </article>
          ))}
        </section>
        <section className="forecast-next-day">
          <div className="next-day-header">
            <h3>Next Forecast</h3>
            <Calendar />
          </div>
          {dataForecast.list.splice(0, 2).map((forecast, idx) => (
            <article className="item-next-day" key={idx}>
              <h3>{forecastWeekDays[idx]}</h3>
              <img
                src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                alt="SunWater"
              />
              <p>
                {Math.round(forecast["main"].temp_max)}° |{" "}
                {Math.round(forecast["main"].temp_min)}°
              </p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
