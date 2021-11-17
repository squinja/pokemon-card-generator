import React, { useState, createContext } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemon, setPokemon] = useState([
    { name: "Magneton", type: "Steel/Electric", id: 1 },
    { name: "Weezing", type: "Poison", id: 2 },
    { name: "Skarmory", type: "Steel/Electric", id: 3 },
    { name: "Magcargo", type: "Fire/Rock", id: 4 },
  ]);
  return (
    <PokemonContext.Provider value={[pokemon, setPokemon]}>
      {props.children}
    </PokemonContext.Provider>
  );
};
