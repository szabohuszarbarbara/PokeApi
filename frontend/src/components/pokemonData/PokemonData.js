import React from 'react';
import "./CardModal.css";

function PokemonData(props) {
    const setShow = props.setShow
    const pokeData = props.pokeData

    const closeModal = () => {
        setShow(false);
    }

    if (!props.show) { return null; }
    //type
    //abilities
    // base exp

    return (
        <div className={"modal-backdrop"} onClick={closeModal}>
            <div className={"modal-container"} onClick={e => e.stopPropagation()}>
                <div className={"close-modal"} onClick={closeModal}>X</div>
                <div className={"modal-image"}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} alt=""/></div>
                <div className={"modal-name"}>{pokeData.name.toUpperCase()}</div><br/>
                <div className={"modal-id"}>ID: #{pokeData.id.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})}</div>
                <div className={"modal-text"}>Base experience: {pokeData.base_experience}</div>
            </div>
        </div>
    );
}

export default PokemonData;