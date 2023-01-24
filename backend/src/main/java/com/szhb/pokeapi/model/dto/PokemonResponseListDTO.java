package com.szhb.pokeapi.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class PokemonResponseListDTO {
    private List<PokemonModelDTO> pokemon;
    private PokemonBaseListDTO baseApiInfo;
}
