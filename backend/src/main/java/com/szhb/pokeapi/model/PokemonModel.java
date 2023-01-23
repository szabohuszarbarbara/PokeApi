package com.szhb.pokeapi.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PokemonModel {
    @JsonIgnoreProperties(ignoreUnknown = true)
    private String name;
    private String id;
    private String height;
    private String weight;
    private List<PokemonType> types;
    private List<PokemonStat> stats;
    private PokemonSpecies species;
    private PokemonColor color;

    public void setColor(PokemonColor color){
        this.color = color;
    }

}
