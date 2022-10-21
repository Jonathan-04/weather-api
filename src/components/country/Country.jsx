import { useState } from "react";
import DataCountry from "../dataCountry/DataCountry";
import { IcTwotoneSearch as Search } from "../icons/Search";
import Bell from "../icons/Bell";

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
    </>
  );
}
