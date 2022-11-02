import "./PokemonList.css";

export default function PokemonListItem({ pokeList}) {

    return (
        <>
            <div className="card-container">
            {pokeList.map(p => (
                <div style={{backgroundColor: "white" }} className="card" key={p.name}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} alt=""/>
                    <div>#{p.id.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})}</div>
                    <div>{p.name.toUpperCase()}</div>
                </div>
            )
            )}
            </div>
        </>
    )
}