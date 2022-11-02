import React from 'react';
import "./CardModal.css";

function PokemonData(props) {
    if (!props.show) { return null; }
    return (
        <div className={"modal-container"}>
            Modal

        </div>
    );
}

export default PokemonData;