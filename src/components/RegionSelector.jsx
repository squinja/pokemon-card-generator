import React, { useState, useContext } from "react";
import { RegionSelectorContext } from "./RegionSelectorContext";

const RegionSelector = () => {
  const [region, setRegion] = useContext(RegionSelectorContext);
  const changeRegion = (e) => {
    setRegion(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>Region Selector</h2>
      <label for="region-select">Choose a region: </label>
      <div className="select">
        <select onChange={changeRegion} name="region" id="region-select">
          <option value="Kanto">Kanto</option>
          <option value="Johto">Johto</option>
          <option value="Hoenn">Hoenn</option>
          <option value="Sinnoh">Sinnoh</option>
          <option value="Unova">Unova</option>
          <option value="Kalos">Kalos</option>
          <option value="Alola">Alola</option>
          <option value="Galar">Galar</option>
        </select>
      </div>
    </div>
  );
};

export default RegionSelector;
