import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryData = () => {
  const { name } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);

  const fetchedData = async () => {
    try {
      if (!name) {
        throw new Error("Country name parameter is undefined");
      }
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCountryInfo(data[0]);
      console.log(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchedData();
  }, [name]);

  if (!countryInfo) {
    return <div>Loading...</div>;
  }

  const {
    capital,
    car,
    borders,
    population,
    flags,
    continents,
    currencies,
    languages,
    maps,
    timezones,
    region,
    startOfWeek,
    subregion,
    independent,
    landlocked,
    name: { nativeName },
  } = countryInfo;

  const officialNativeName = nativeName?.eng?.official;
  const currency = currencies
    ? Object.values(currencies)[0]
    : { name: "Not Available", symbol: "" };
  const border = borders ? Object.values(borders.join(",")) : null;

  return (
    <div className="p-6 flex flex-col">
      <div>
        <Link to="/">
        <button className="border border-box shadow-lg rounded-lg mb-4 p-4 px-8 pr-8">← Back</button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-none lg:w-[32rem]">
          <img
            className="w-full object-fit shadow-lg rounded-sm bg-slate-900"
            src={flags.png}
            alt="flag"
            loading="lazy"
          />
        </div>
        <div className="flex-1 lg:ml-8 mt-4 lg:mt-0">
          <h1 className="py-2 font-sans font-bold text-5xl">{name}</h1>
          <div className="py-5 lg:flex lg:space-x-8">
            <div className="font-medium space-y-2 lg:w-1/2">
              <p>Native name: {officialNativeName}</p>
              <p>Capital city: {capital}</p>
              <p>Population: {population}</p>
              <p>Language: {languages.eng}</p>
              <p>
                Currency: {currency.name} {currency.symbol}
              </p>
              <p>Start of the week: {startOfWeek}</p>
              <p>Car side: {car.side}</p>
            </div>
            <div className="font-medium space-y-2 lg:w-1/2">
              <p>Region: {region}</p>
              <p>Subregion: {subregion}</p>
              <p>Continent: {continents}</p>
              <p>Timezone: {timezones}</p>
              <p>Border: {border}</p>
              <p>Independent: {independent ? "Yes" : "No"}</p>
              <p>Landlocked: {landlocked ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryData;





