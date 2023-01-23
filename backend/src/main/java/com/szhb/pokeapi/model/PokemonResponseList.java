package com.szhb.pokeapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class PokemonResponseList {
    private List<PokemonModel> pokemon;
    private PokemonBaseList baseApiInfo;
}
