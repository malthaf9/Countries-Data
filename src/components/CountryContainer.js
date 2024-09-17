import React, { useEffect, useMemo, useState } from "react";
import SingleCountry from "./SingleCountry";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const CountryContainer = ({ query, region }) => {
  const [countries, setCountries] = useState([]);

  const fetchedData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      //console.log(data)
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  const filteredCountries = useMemo(() => {
return countries.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase())).filter((country) => country.region.includes(region))
  }, [countries, query, region])

  return (
    <div className="flex flex-wrap m-4">
      {!countries ? (
        <Shimmer />
      ) : (
          filteredCountries.map((country) => (
            <Link
              className="p-0"
              key={country.cca3}
              to={`/countries/${country.name.common}`}
            >
              <SingleCountry key={country.cca3} country={country} />
            </Link>
          ))
      )}
    </div>
  );
};

export default CountryContainer;

