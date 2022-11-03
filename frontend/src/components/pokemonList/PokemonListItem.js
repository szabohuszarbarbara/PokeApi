import "./PokemonList.css";
import PokemonData from "../pokemonData/PokemonData";
import {useState} from "react";

export default function PokemonListItem({ pokeList}) {
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);

    const openModal = (num) => {
        setShow(true);
        setId( num);
    }

    return (
        <>
            <div className="card-container">
            {pokeList.map(p => (
                <div style={{backgroundColor: "white" }} className="card" key={p.name} onClick={ () => openModal(p.id) }>
                    <div className={"card-image"}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} alt=""/></div>
                    <div className={"card-id"}>#{p.id.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})}</div>
                    <div className={"card-name"}>{p.name.toUpperCase()}</div>
                </div>
            )
            )}
                <PokemonData show={ show } id = {id} setShow={setShow}/>
            </div>
        </>
    )
}