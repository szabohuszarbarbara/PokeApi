import React from 'react'

export default function PokemonList({ pokeList }) {
    return (
        <>
            {pokeList.map(p => (
                <div key={p.name}>{p.name}</div>
            )
            )}
        </>
    )
}