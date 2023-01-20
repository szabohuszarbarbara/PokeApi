package com.szhb.pokeapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class PokemonResponseList {
    private Set<PokemonModel> pokemon;
    private PokemonBaseList baseList;
}
