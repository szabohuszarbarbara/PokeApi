import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonListItem from "./PokemonListItem";
import Pagination from "../pagination/Pagination";

function PokemonListContainer() {
    const [pokeList, setPokeList] = useState([]);
    const [url, setUrl] = useState("/api/pokemon")
    const [prevUrl, setPrevUrl] = useState("")
    const [nextUrl, setNextUrl] = useState("")

    useEffect(   () => {
        getData();
    }, [url])

    const getData = () => {
        axios.get(url).then(result => {
            console.log(result)
            setPrevUrl(result.data.baseList.previous)
            setNextUrl(result.data.baseList.next)
            setPokeList(result.data.pokemon)
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    const goToPrevPage = () => {
        setUrl(prevUrl)
    }

    const goToNextPage = () => {
        setUrl(nextUrl)
    }

    return (
        <>
            <Pagination goToPrevPage={ prevUrl ? goToPrevPage : null} goToNextPage={nextUrl ? goToNextPage : null}/>
            <PokemonListItem pokeList={pokeList} />
        </>
    );
}

export default PokemonListContainer;