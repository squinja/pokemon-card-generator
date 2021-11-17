import React, { useState, createContext } from "react";

export const RegionSelectorContext = createContext();

export const RegionSelectorProvider = (props) => {
  const [region, setRegion] = useState("Kanto");
  return (
    <RegionSelectorContext.Provider value={[region, setRegion]}>
      {props.children}
    </RegionSelectorContext.Provider>
  );
};
