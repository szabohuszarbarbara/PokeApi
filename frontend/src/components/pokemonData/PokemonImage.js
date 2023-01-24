
function PokemonImage({pokeData}) {
    return (
        <>
            <div className={`stripe ${pokeData.color.color.name}`} ></div>
            <div className={"modal-image-container"}>
                <div className={"modal-image"}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} alt=""/></div>
            </div>
        </>
    );
}

export default PokemonImage;