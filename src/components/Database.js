import React, { useEffect, useState, useContext } from "react";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";
import Announcer from "./Announcer";
import Pagination from "./Pagination";
import RegionSelector from "./RegionSelector";

import { FetchPokemonList } from "./FetchPokemonList";

import "./Paginator.css";
import {
  RegionSelectorContext,
  RegionSelectorProvider,
} from "./RegionSelectorContext";

import { Link } from "react-router-dom";

function Database() {
  useEffect(() => {
    FetchPokemonList({
      pokemon: pokemon,
      setPokemon: setPokemon,
      region: region,
    });
  }, []);

  // Regions coming from RegionSelector controlled by Context
  const [region, setRegion] = useContext(RegionSelectorContext);

  // Search bar functionality
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  const filterPokemon = (mons, query) => {
    if (!query) {
      return mons;
    }

    return mons.filter((mon) => {
      return mon.name.includes(query);
    });
  };

  const [pokemon, setPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredMons = filterPokemon(pokemon, searchQuery);
  // Search bar functionality

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  // Pagination

  // const fetchPokemon = async (pokemon, setPokemon) => {
  //   const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=75
  //   `);

  //   const pokemonData = await data.json();

  //   const enhancedPokeData = await Promise.all(
  //     pokemonData.results.map(async (poke) => {
  //       let extraData = await fetch(poke.url);
  //       extraData = await extraData.json();
  //       poke.details = extraData;
  //       return poke;
  //     })
  //   );

  //   setPokemon(enhancedPokeData);
  // };

  const handleSearchQuery = (e) => {
    if (currentPage !== 1) setCurrentPage(1);
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {/* <RegionSelectorProvider> */}
      <h1 className="headers">{region} Pokemon Database</h1>
      <RegionSelector />
      <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchQuery} />
      {/* <div className="database-container">
        {filteredMons.map((mon) => (
          <PokemonCard pokemon={mon} />
        ))}
      </div> */}
      <Pagination
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={filteredMons}
        RenderComponent={PokemonCard}
        title="Pokemon Title"
        pageLimit={6}
        dataLimit={20}
      />
      <Announcer message={`Found ${filteredMons.length} pokemon`} />
      {/* </RegionSelectorProvider> */}
    </div>
  );
}

export default Database;
