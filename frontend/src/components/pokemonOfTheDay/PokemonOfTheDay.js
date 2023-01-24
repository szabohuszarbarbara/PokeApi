import axios from "axios";
import {useState, useEffect} from "react";
import "./PokemonOfTheDay.css";

function PokemonOfTheDay() {
    const url = "/api/pokemon/pokemon-of-the-day"
    const [pokeData, setPokeData] = useState(undefined);

    useEffect(    () => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const result = await axios.get(url);
            console.log(result.data);
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
                    <div className={"potd-image-container"}>
                        <div className={"potd-image"}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} alt=""/></div>
                    </div>
                    <div className={"potd-name"}>{pokeData.name.toUpperCase()}</div>
                    <div className="potd">#{pokeData.id.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})}</div>
                </div>
                <div className="potd-item">
                    <div className={"potd-text"}>Type: {pokeData.types[0].type.name} </div>
                    <div className={"potd-text"}>Height: {pokeData.height/10} m</div>
                    <div className={"potd-text"}>Weight: {pokeData.weight/10} kg</div>
                    <div className={"potd-text"}>XP: {pokeData.base_experience}</div>
                    <div className={"potd-text"}>HP: {pokeData.stats[0].base_stat} </div>
                    <div className={"potd-text"}>Attack: {pokeData.stats[1].base_stat} </div>
                    <div className={"potd-text"}>Defense: {pokeData.stats[2].base_stat} </div>
                    <div className={"potd-text"}>Speed: {pokeData.stats[5].base_stat} </div>
                </div>
            </div>
        </>
    );
}

export default PokemonOfTheDay;