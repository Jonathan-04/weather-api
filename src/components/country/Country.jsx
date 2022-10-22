import { useState } from "react";

import { IcTwotoneSearch as Search } from "../icons/Search";
import DataCountry from "../dataCountry/DataCountry";
import Bell from "../icons/Bell";
import Forecast from "../Forecast/Forecast";
import DataForecast from "../dataCountry/DataForecast";

export default function Country() {
  const [dataCity, setDataCity] = useState();

  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchData = async (e) => {
    e.preventDefault();
    const inputCity = document.querySelector("#inputCity");
    const city = inputCity.value;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
    );
    const data = await res.json();
    if (data.cod === "404") {
      alert("Ingresa una Ciudad correctamente");
    } else {
      setDataCity(data);
    }
  };

  if (!dataCity)
    return (
      <>
        <form onSubmit={fetchData}>
          <header className="header">
            <div className="header-search">
              <button>
                <Search />
              </button>
              <input type="text" id="inputCity" placeholder="Ciudad" required />
            </div>
            <Bell />
          </header>
          <h1 id="text-ingresar">Ingresa el Nombre de la Ciudad</h1>
        </form>
        <DataForecast />
      </>
    );
  return (
    <>
      <form onSubmit={fetchData}>
        <header className="header">
          <div className="header-search">
            <button>
              <Search />
            </button>
            <input type="text" id="inputCity" placeholder="Ciudad" required />
          </div>
          <Bell />
        </header>
      </form>
      <DataCountry dataCity={dataCity} />

      <Forecast forecastCity={dataCity.name} />
    </>
  );
}
