import React from 'react';
import PokemonListContainer from "../components/pokemonList/PokemonListContainer";

function Home(props) {
    return (
        <div>
            <h1>Pokedex</h1>
            <PokemonListContainer />
        </div>
    );
}

export default Home;