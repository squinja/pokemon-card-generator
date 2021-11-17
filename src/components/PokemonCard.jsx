import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const types = pokemon.details.types.reduce((acc, type, i) => {
    return acc + type.type.name + (i === 1 ? "" : " -");
  }, "");

  return (
    <div className="pokemon-card">
      <h1 className="pokemon-card-title">
        {pokemon.details.id}. {pokemon.name.toUpperCase()}
      </h1>
      <div className="pokemon-card-picture-border">
        <div className={`pokemon-card-picture ${types}`}>
          <img src={pokemon.details.sprites.front_default}></img>
        </div>
      </div>
      <div>
        {pokemon.details.moves.map((move, i) => {
          if (i < 4) {
            return <p>{move.move.name.replace("-", " ")}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
