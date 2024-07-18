import React from "react";

const Filter = ({ setRegion }) => {
  return (
    <div className="">
      <select onChange={(e) => setRegion(e.target.value)} className="border border-box rounded-lg shadow-lg p-2">
        <option hidden="">Filter by region</option>
        <option className="">Asia</option>
        <option>Europe</option>
        <option>Americas</option>
        <option>Oceania</option>
        <option>Africa</option>
      </select>
    </div>
  );
};

export default Filter;
