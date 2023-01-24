package com.szhb.pokeapi.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PokemonSpritesDTO {

    @JsonIgnoreProperties(ignoreUnknown = true)
    private String front_default;
}
