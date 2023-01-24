import axios from "axios";
import {useState, useEffect} from "react";
import "./PokemonOfTheDay.css";
import PokemonStats from "../pokemonData/PokemonStats";
import DEAFULT_POKEMON from "../img/unknown-pokemon.webp";

function PokemonOfTheDay() {
    const url = "/api/pokemon/pokemon-of-the-day"
    const [pokeData, setPokeData] = useState(undefined);
    const image = DEAFULT_POKEMON;

    useEffect(    () => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const result = await axios.get(url);
            setPokeData(result.data);

        } catch (err) {
            console.error(err);
            return <div> ERR</div>
        }
    };

    if (pokeData === undefined)
    {return <div>Loading... Please wait!</div>}

    return (
        <>
            <br/>
            <br/>
            <div>THE POKEMON OF THE DAY IS:</div>
            <div className="potd-container">
                <div className="potd-item">
                    <div className={`potd-stripe ${pokeData.color.color.name}`} ></div>
                    <div className={"potd--image-container"}>
                        <div className={"potd-image"}><img src={ !pokeData.sprites.front_default? image : `${pokeData.sprites.front_default}`} alt=""/></div>
                    </div>
                </div>
                <div className="potd-item">
                    <PokemonStats pokeData={pokeData}/>
                </div>
            </div>
        </>
    );
}

export default PokemonOfTheDay;