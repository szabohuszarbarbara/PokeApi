import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonList from "./PokemonList";

function PokemonListContainer() {
    const [pokeList, setPokeList] = useState([]);

    useEffect(  () => {
        axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
            getPokeList(res.data.results.map(p => p.url));
        })
    }, [])

    const getPokeList = (url) => {

        url.map(p => axios.get(p).then(result => {
            setPokeList(
                state =>{
                    state=[...state, result.data]
                    state.sort( (a,b) => a.id > b.id ? 1 : -1 )
                    return state
                }
            );
        }) )
    }

    return (
        <>
            <PokemonList pokeList={pokeList}/>
        </>

    );
}

export default PokemonListContainer;