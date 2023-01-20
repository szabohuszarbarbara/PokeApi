package com.szhb.pokeapi.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PokemonModel {
    @JsonIgnoreProperties(ignoreUnknown = true)
    private String name;
    private String id;

}
