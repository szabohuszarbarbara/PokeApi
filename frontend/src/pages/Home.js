import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PokemonOfTheDay from "../components/pokemonOfTheDay/PokemonOfTheDay";

function Home() {
    return (
        <div>
            <Header/>
            <PokemonOfTheDay />
            <Footer/>
        </div>
    );
}

export default Home;