import {useState} from "react";
import axios from "axios";

function SearchPokemon() {
    const [pokemon, setPokemon] = useState("")

    const searchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(result => console.log(result))
    }

    return (
        <>
            <input type="text" onChange={ (event) => setPokemon(event.target.value.toLowerCase) }></input>
            <button onClick={searchPokemon}>Search Pokemon</button>
        </>
    );
}

export default SearchPokemon;