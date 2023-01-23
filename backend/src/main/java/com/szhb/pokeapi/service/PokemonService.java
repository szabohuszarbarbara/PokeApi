package com.szhb.pokeapi.service;

import com.szhb.pokeapi.model.*;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class PokemonService {
    public PokemonResponseList getPokemonList() {
        RestTemplate restTemplate = new RestTemplate();
        String baseUrl = "https://pokeapi.co/api/v2/pokemon";
        ResponseEntity<PokemonBaseList> basicInfo = restTemplate.getForEntity(baseUrl, PokemonBaseList.class);
        List<PokemonModel> pokemonList =  Objects.requireNonNull(basicInfo.getBody()).getResults().stream()
                .map(obj -> {
                    ResponseEntity<PokemonModel> pokemon = restTemplate.getForEntity(obj.getUrl(), PokemonModel.class);
                    String speciesUrl = Objects.requireNonNull(pokemon.getBody()).getSpecies().getUrl();
                    ResponseEntity<PokemonColor> pokemonColor = restTemplate.getForEntity(speciesUrl, PokemonColor.class);
                    pokemon.getBody().setColor(pokemonColor.getBody());
                    return pokemon.getBody();
                }).collect(Collectors.toList());
        PokemonResponseList pokemons = new PokemonResponseList(pokemonList, basicInfo.getBody() );

        return pokemons;
    }

}
