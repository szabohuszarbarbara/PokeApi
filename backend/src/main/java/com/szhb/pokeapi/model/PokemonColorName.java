package com.szhb.pokeapi.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class PokemonColorName {
    @JsonIgnoreProperties(ignoreUnknown = true)
    private String name;
}
