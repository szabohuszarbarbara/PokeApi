import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonListItem from "./PokemonListItem";
import Pagination from "../pagination/Pagination";

function PokemonListContainer() {
    const [pokeList, setPokeList] = useState([]);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [prevUrl, setPrevUrl] = useState("")
    const [nextUrl, setNextUrl] = useState("")

    useEffect(  () => {
        setPokeList([])
        getData();
        // getColor
        // store result to localstorage (plus information needed to cards too
        // merge data and color
        // hashmao
    }, [url])

    const getData = async () => {
        await axios.get(url).then(async result => {
            setPrevUrl(result.data.previous)
            setNextUrl(result.data.next)
            const resultList = result.data.results
            const urls = resultList.map(p => p.url)
            await getPokeList(urls);
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    const getPokeList = async (urls) => {
        urls.map( async url => await axios.get(url).then( async result => {
/*
            https://pokeapi.co/api/v2/pokemon-species/${id}/
            */
            const color = await getPokeColor(result.data.species.url)

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
    const getPokeColor = async (url) => {
        await axios.get(url).then(async result => {
            return await result.data.color.name
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