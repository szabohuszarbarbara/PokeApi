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
    }, [url])

    const getData = async () => {
        await axios.get(url).then(result => {
            setPrevUrl(result.data.previous)
            setNextUrl(result.data.next)
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
    const goToPrevPage = () => {
        setUrl(prevUrl)
    }

    const goToNextPage = () => {
        setUrl(nextUrl)
    }

    return (
        <>
            <PokemonListItem pokeList={pokeList} />
            <Pagination goToPrevPage={ prevUrl ? goToPrevPage : null} goToNextPage={nextUrl ? goToNextPage : null}/>
        </>
    );
}

export default PokemonListContainer;