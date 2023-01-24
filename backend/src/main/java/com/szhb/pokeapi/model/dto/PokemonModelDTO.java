package com.szhb.pokeapi.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PokemonModelDTO {
    @JsonIgnoreProperties(ignoreUnknown = true)
    private String name;
    private String id;
    private String height;
    private String weight;
    private List<PokemonTypeDTO> types;
    private List<PokemonStatDTO> stats;
    private PokemonSpeciesDTO species;
    private PokemonColorDTO color;

    public void setColor(PokemonColorDTO color){
        this.color = color;
    }

}
