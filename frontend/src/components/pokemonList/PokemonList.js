import React from 'react'

export default function PokemonList({ pokeList }) {
    return (
        <>
            {pokeList.map(p => (
                <div key={p.name}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} alt=""/>
                    <span>{p.name}</span>
                </div>
            )
            )}
        </>
    )
}