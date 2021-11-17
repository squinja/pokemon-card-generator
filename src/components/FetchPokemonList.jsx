import React from "react";

export const FetchPokemonList = async ({ pokemon, setPokemon, region }) => {
  // Depending on the region coming from RegionSelector > Database > this component, FetchPokemonList retrieves the appropriate pokemon data from that region using a switch statement

  //   const pokemonDataNumberSet = [0, 0];

  //   switch (region) {
  //     case "Kanto":
  //       pokemonDataNumberSet[0] = 1;
  //       pokemonDataNumberSet[1] = 150;
  //       break;

  //     case "Johto":
  //       pokemonDataNumberSet[0] = 151;
  //       pokemonDataNumberSet[1] = 276;
  //       break;
  //   }

  //   const data = [];
  //   for (let i = pokemonDataNumberSet[0]; i < pokemonDataNumberSet[1]; i++) {
  //     data.push(
  //       await fetch(`https://pokeapi.co/api/v2/pokemon/${i}
  //     `)
  //     );
  //   }
  //   console.log(data);

  const dataN = [];
  for (let i = 1; i < 152; i++) {
    dataN.push(
      await fetch(`https://pokeapi.co/api/v2/generation/1/
        `)
    );
  }
  console.log(dataN);

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=75
    `);

  const pokemonData = await data.json();
  console.log(pokemonData);

  const enhancedPokeData = await Promise.all(
    pokemonData.results.map(async (poke) => {
      let extraData = await fetch(poke.url);
      extraData = await extraData.json();
      poke.details = extraData;
      return poke;
    })
  );

  setPokemon(enhancedPokeData);
};
