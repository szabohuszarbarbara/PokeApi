package com.szhb.pokeapi.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;


@RequiredArgsConstructor
@Getter
public class PokemonBaseList {

    private String count;
    private String next;
    private String previous;
    private List<PokemonUrl> results;


}
