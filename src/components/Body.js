import React, { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import CountryContainer from "./CountryContainer";

const Body = () => {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between p-4 space-y-4 md:space-y-0 md:space-x-4">
        <Search setQuery={setQuery} />
        <Filter setRegion={setRegion} />
      </div>
      <CountryContainer query={query} region={region} />
    </div>
  );
};

export default Body;
