import React from 'react';
import "./CardModal.css";

function PokemonData(props) {
    const setShow = props.setShow
    const closeModal = () => {
        setShow(false);
    }
    if (!props.show) { return null; }
    return (
        <div className={"modal-container"}>
            <div className={"close-modal"} onClick={closeModal}>X</div>
            Modal

        </div>
    );
}

export default PokemonData;