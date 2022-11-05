import React from 'react';
import "./CardModal.css";

function PokemonData(props) {
    const setShow = props.setShow
    const pokeData = props.pokeData

    const closeModal = () => {
        setShow(false);
    }

    if (!props.show) { return null; }

    return (
        <div className={"modal-container"}>
            <div className={"close-modal"} onClick={closeModal}>X</div>
            <div className={"card-image"}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} alt=""/></div>
            <div>{pokeData.id}</div>
            <div>{pokeData.name}</div>

        </div>
    );
}

export default PokemonData;