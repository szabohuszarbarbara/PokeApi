import "./PokemonList.css";

export default function PokemonList({ pokeList, color }) {
    return (
        <>
            <div className="card-container">
            {pokeList.map(p => (
                <div style={{backgroundColor: color }} className="card" key={p.name}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} alt=""/>
                    <div>{p.id}</div>
                    <div>{p.name.toUpperCase()}</div>
                </div>
            )
            )}
            </div>
        </>
    )
}