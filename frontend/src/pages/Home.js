import React from 'react';
import PokemonListContainer from "../components/pokemonList/PokemonListContainer";
import Header from "../components/header/Header";

function Home(props) {
    return (
        <div>
            <Header/>
            <PokemonListContainer />
        </div>
    );
}

export default Home;