import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonListItem from "./PokemonListItem";
import Pagination from "../pagination/Pagination";

function PokemonListContainer() {
    const [pokeList, setPokeList] = useState([]);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")

    useEffect(  () => {
        getData();
    }, [])

    const getData = async () => {
        await axios.get(url).then(result => {
            const resultList = result.data.results
            const urls = resultList.map(p => p.url)
            getPokeList(urls);
        })
            .catch(function (error) {
                console.log(error);
            })

    }

    const getPokeList = async (urls) => {
        urls.map( async url => await axios.get(url).then( async result => {

/*            await getPokeColor(result.data.species.url)
            console.log(getPokeColor(result.data.species.url))*/

            setPokeList(
                state =>{
                    state=[...state, result.data ]
                    state.sort( (a,b) => a.id > b.id ? 1 : -1 )
                    return state
                }
            );
        })
            .catch(function (error) {
                console.log(error);
            }))
    }
/*    const getPokeColor = async (p) => {
        return await axios.get(p).then(result => {
            result.data.color
        })
    }*/

    return (
        <>
            <PokemonListItem pokeList={pokeList} />
            <Pagination />
        </>
    );
}

export default PokemonListContainer;