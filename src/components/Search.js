import React from "react";

const Search = ({ setQuery }) => {
  return (
    <div className="">
      <input
        className="p-3 px-5 border border-box shadow-lg rounded-lg"
        type="text"
        placeholder="Search for a country"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default Search;
