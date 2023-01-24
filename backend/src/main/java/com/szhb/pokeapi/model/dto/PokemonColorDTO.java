package com.szhb.pokeapi.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class PokemonColorDTO {
    @JsonIgnoreProperties(ignoreUnknown = true)
    private PokemonColorNameDTO color;
}
