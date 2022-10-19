import React from 'react'

export default function PokemonList({ pokemon }) {
    return (
        <>
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </>
    )
}