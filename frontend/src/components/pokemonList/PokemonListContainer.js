import React, {useEffect, useState} from 'react';
import axios from "axios"
import PokemonList from "./PokemonList";

function PokemonListContainer() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon" ).then(res => {
            setPokemon(res.data.results.map(p => p.name))
        })
    }, [])

    return (
        <>
            <PokemonList pokemon={pokemon}/>
        </>

    );
}

export default PokemonListContainer;