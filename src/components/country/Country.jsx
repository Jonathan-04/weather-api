import { useState } from "react";

import { IcTwotoneSearch as Search } from "../icons/Search";
import DataCountry from "../dataCountry/DataCountry";
import Bell from "../icons/Bell";
import Forecast from "../Forecast/Forecast";
import DataForecast from "../dataCountry/DataForecast";

import Day from "../../assets/img/day.jpg";
import Night from "../../assets/img/night.jpg";
import Rain from "../../assets/img/rain.jpg";
import SunSet from "../../assets/img/sunset.jpg";

export default function Country() {
  //Guardar datos de la Ciudad ingresada
  const [dataCity, setDataCity] = useState();
  //Guardar si hay un estado  de Clima "LLuvia - Rain"
  const [climate, setClimate] = useState();
  //Guardar el timezone de la Ciudad ingresada
  const [unixTime, setUnixTime] = useState();

  var backgroundImage = document.querySelector("#background-image");

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
      //Pasar los datos de la Ciudad
      setDataCity(data);
      //Recorrer el estado de clima de la Ciudad
      for (let i = 0; i < data.weather.length; i++) {
        setClimate(data.weather[i].main);
      }
      //Pasar el timezone
      setUnixTime(data.timezone);
    }
  };

  if (unixTime) {
    //Obtener la hora de la Ciudad ingresada por medio del Timezone (unixTime)
    let date = new Date();
    let localTime = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let city = utc + 1000 * unixTime;
    let cityTime = new Date(city);
    //Se obtiene la hora de 1 a 24 horas
    let cityTimeHour = cityTime.getHours();

    //Si el estado de clima es "Lluvia - Rain" mostrar imagen de lluvia
    //Mostrar imagen segun la hora de la Ciudad
    if (climate === "Rain") {
      backgroundImage.src = Rain;
    } else if (cityTimeHour <= 5 || cityTimeHour >= 19) {
      backgroundImage.src = Night;
    } else if (cityTimeHour >= 5 && cityTimeHour <= 15) {
      backgroundImage.src = Day;
    } else if (cityTimeHour >= 16 && cityTimeHour <= 18) {
      backgroundImage.src = SunSet;
    }
  }

  if (!dataCity)
    return (
      <>
        <div>
          <img id="background-image" src={Day} alt="" />
        </div>
        <form onSubmit={fetchData}>
          <header className="header">
            <div className="header-search">
              <button>
                <Search />
              </button>
              <input
                type="text"
                id="inputCity"
                placeholder="Ingresar Ciudad"
                required
              />
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
      <div>
        <img id="background-image" src={Day} alt="" />
      </div>
      <form onSubmit={fetchData}>
        <header className="header">
          <div className="header-search">
            <button>
              <Search />
            </button>
            <input
              type="text"
              id="inputCity"
              placeholder="Ingresar Ciudad"
              required
            />
          </div>
          <Bell />
        </header>
      </form>
      <DataCountry dataCity={dataCity} />

      <Forecast forecastCity={dataCity.name} />
    </>
  );
}
