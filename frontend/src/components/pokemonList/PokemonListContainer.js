import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonListItem from "./PokemonListItem";
import Pagination from "../pagination/Pagination";

function PokemonListContainer() {
    const BASE_URL = "/api/pokemon"
    const [pokeList, setPokeList] = useState([]);
    const [url, setUrl] = useState(BASE_URL + "?offset=0&limit=20")
    const [prevUrl, setPrevUrl] = useState("")
    const [nextUrl, setNextUrl] = useState("")

    useEffect(   () => {
        getData();
    }, [url])

    const getData = () => {
        axios.get(url).then(result => {
            setPrevUrl(result.data.baseApiInfo.previous)
            setNextUrl(result.data.baseApiInfo.next)
            setPokeList(result.data.pokemon)
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    const goToPrevPage = () => {
        let newUrl = prevUrl.split("?")
        setUrl(BASE_URL + "?" + newUrl[1])
    }

    const goToNextPage = () => {
        let newUrl = nextUrl.split("?")
        setUrl(BASE_URL + "?" + newUrl[1])
    }

    return (
        <>
            <Pagination goToPrevPage={ prevUrl ? goToPrevPage : null} goToNextPage={nextUrl ? goToNextPage : null}/>
            <PokemonListItem pokeList={pokeList} />
        </>
    );
}

export default PokemonListContainer;