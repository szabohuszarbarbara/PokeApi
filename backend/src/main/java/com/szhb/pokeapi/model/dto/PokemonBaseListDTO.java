package com.szhb.pokeapi.model.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;


@RequiredArgsConstructor
@Getter
public class PokemonBaseListDTO {

    private String count;
    private String next;
    private String previous;
    private List<PokemonUrlDTO> results;


}
