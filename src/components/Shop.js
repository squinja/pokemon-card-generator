import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
    // console.log(abilities);
  }, []);

  const [abilities, setAbilities] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/garchomp");

    const garchompData = await data.json();
    setAbilities(garchompData.abilities);
  };

  console.log(abilities);
  return (
    <div>
      <h1 className="headers">Shop</h1>
      <div>
        <h2>Garchomp abilities</h2>
        {abilities.map((ability) => (
          <h3 key={ability.slot}>
            <Link to={`/shop/${ability.slot}`}>
              {ability.ability.name.replace("-", " ")}
            </Link>
          </h3>
        ))}
      </div>
    </div>
  );
}
// {items.map((item) => {
//   item.abilities;
// })}

export default Shop;
