import "./CardModal.css";
import "../pokemonList/PokemonList.css";
import PokemonImage from "./PokemonImage";
import PokemonStats from "./PokemonStats";

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
                <div className={"close-modal"} onClick={closeModal}>X</div>
                    <PokemonImage pokeData = {pokeData} />
                <div className={"modal-attributes"}>
                    <PokemonStats pokeData = {pokeData} />
                </div>
            </div>
        </div>
    );
}

export default PokemonData;