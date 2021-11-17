import React, { useState, useContext } from "react";
import { PokemonContext } from "./PokemonContext";

const AddPokemon = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [pokemon, setPokemon] = useContext(PokemonContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateType = (e) => {
    setType(e.target.value);
  };

  const addPokemon = (e) => {
    e.preventDefault();
    setPokemon((prevPokemon) => [...prevPokemon, { name: name, type: type }]);
  };
  return (
    <form onSubmit={addPokemon}>
      <input type="text" name="name" value={name} onChange={updateName}></input>
      <input type="text" name="type" value={type} onChange={updateType}></input>
      <button>Submit idea</button>
    </form>
  );
};

export default AddPokemon;
