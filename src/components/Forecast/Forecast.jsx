import React, { useEffect, useState } from "react";
import DataForecast from "../dataCountry/DataForecast";

export default function Forecast({ forecastCity }) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [forecast, setForecast] = useState();
  const city = forecastCity;

  useEffect(() => {
    fetchForecast();
    async function fetchForecast() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=es`
      );

      const data = await res.json();
      setForecast(data);
    }
  }, []);

  if (!forecast) return <div />;

  return (
    <>
      <DataForecast dataForecast={forecast} />
    </>
  );
}
