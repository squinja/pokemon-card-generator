import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match.params.id);
  }, []);

  const [ability, setAbility] = useState([]);
  const [image, setImage] = useState("");

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://pokeapi.co/api/v2/ability/${match.params.id}`
    );
    const item = await fetchItem.json();
    setAbility(item.pokemon);
  };

  const fetchImg = async (url) => {
    const fetchImg = await fetch(`${url}`);
    const img = await fetchImg.json();

    setImage(img.sprites.front_default);
  };
  console.log(ability);

  return (
    <div>
      <h1>
        Other pokemon with this ability
        {ability.map((pokemon) => (
          <h2>{pokemon.pokemon.name}</h2>
          //   <img src={pokemon.pokemon.sprites.front_female} />
        ))}
        {/* {ability.map((pokemon) => (
            fetchImg(pokemon.pokemon.url);
           <img src={image}/> 
        ))} */}
      </h1>
    </div>
  );
}
// {items.map((item) => {
//   item.abilities;
// })}

export default Item;
