import React, { useState } from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import PokemonList from "./PokemonList";
import ItemDetail from "./ItemDetail";
import AddPokemon from "./AddPokemon";
import Database from "./Database";
import { PokemonProvider } from "./PokemonContext";
import { RegionSelectorProvider } from "./RegionSelectorContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <PokemonProvider>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <RegionSelectorProvider>
              <Route path="/database" component={Database} />
            </RegionSelectorProvider>
            <Route path="/database/:pageNumber" component={Database} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetail} />
            <Route path="/pokemonlist" component={PokemonList} />
          </Switch>
        </div>
      </PokemonProvider>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
