import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryData = () => {
  const { name } = useParams();
  //console.log('useParams name:', name);
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
    name: {nativeName}
  } = countryInfo;

  const officialNativeName = nativeName?.eng?.official
  const currency = currencies ? Object.values(currencies)[0] : { name: 'Not Available', symbol: '' };
  const border = borders ? Object.values(borders) : null

  return (
    <div className="p-6 py-[4rem]">
      <div className="">
      <img className="w-[26rem]" src={flags.png} alt="flagss" />
      <h1 className=" py-2  font-thin font-mono text-3xl">{name}</h1>
      <p>Native name: {officialNativeName}</p>
      <p>Capital city: {capital}</p>
      <p>Population: {population}</p>
      <p>Language: {languages.eng}</p>
      <p>Currency: {currency.name} {currency.symbol}</p>
      <p>Start of the week: {startOfWeek}</p>
      <p>Car side: {car.side}</p>
      <p>Region: {region}</p>
      <p>Continent: {continents}</p>
      <p>Timezone: {timezones}</p>
      <p>Border: {border}</p>
      </div>
    </div>
  )
};

export default CountryData;
