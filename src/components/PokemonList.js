import React, { useState, useContext } from "react";
import Pokemon from "./Pokemon";
import AddPokemon from "./AddPokemon";
import { PokemonContext } from "./PokemonContext";

const PokemonList = () => {
  const [pokemon, setPokemon] = useContext(PokemonContext);
  return (
    <div>
      <h1 className="headers">Pokemon List</h1>
      <AddPokemon />
      {pokemon.map((pokemon) => (
        <Pokemon name={pokemon.name} type={pokemon.type} key={pokemon.id} />
      ))}
    </div>
  );
};

export default PokemonList;
