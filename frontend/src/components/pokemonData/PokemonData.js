import React from 'react';
import "./CardModal.css";
import "../pokemonList/PokemonList.css";

function PokemonData(props) {
    const setShow = props.setShow
    const pokeData = props.pokeData

    const closeModal = () => {
        setShow(false);
    }

    if (!props.show) { return null; }

    return (
        <div className={"modal-backdrop"} onClick={closeModal}>
            <div className={"modal-container"} onClick={e => e.stopPropagation()}>
                <div className={`stripe ${pokeData.color}`} ></div>
                <div className={"close-modal"} onClick={closeModal}>X</div>
                <div className={"modal-image-container"}>
                    <div className={"modal-image"}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} alt=""/></div>
                </div>
                <div className={"modal-attributes"}>
                    <div className={"modal-name"}>{pokeData.name.toUpperCase()}</div><br/>
                    <div>BASE ATTRIBUTES</div> <br/>
                    <div className={"modal-text"}>XP: {pokeData.base_experience}</div>
                </div>
            </div>
        </div>
    );
}

export default PokemonData;