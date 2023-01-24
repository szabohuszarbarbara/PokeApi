package com.szhb.pokeapi.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class PokemonSpeciesDTO {
    @JsonIgnoreProperties(ignoreUnknown = true)
    private String url;
}
