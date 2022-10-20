import React from 'react'
import "./PokemonList.css";

export default function PokemonList({ pokeList }) {
    return (
        <>
            <div className="card-container">
            {pokeList.map(p => (
                <div className="card" key={p.name}>
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