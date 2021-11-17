import React, { useContext } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";

const Nav = () => {
  const [pokemon, setPokemon] = useContext(PokemonContext);
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/database">
          <li>Database</li>
        </Link>
        <Link style={navStyle} to="/pokemonlist">
          <li>Pokemon List: {pokemon.length}</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
