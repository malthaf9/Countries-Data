import React from "react";

const SingleCountry = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <div className="p-2 m-6 w-[16rem] h-[20rem] border shadow-lg">
      <div className="h-1/2 w-full flex items-center justify-center overflow-hidden p-0 m-0">
        <img
          src={flags.png}
          alt="flagss"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="h-1/2 p-2 flex flex-col justify-between">
        <h1 className="text-lg font-bold">{name.common}</h1>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};

export default SingleCountry;
