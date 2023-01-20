package com.szhb.pokeapi.service;

import com.szhb.pokeapi.model.PokemonBaseList;
import com.szhb.pokeapi.model.PokemonModel;
import com.szhb.pokeapi.model.PokemonResponseList;
import com.szhb.pokeapi.model.PokemonUrl;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class PokemonService {
    public PokemonResponseList getPokemonList() {
        RestTemplate restTemplate = new RestTemplate();
        String baseUrl = "https://pokeapi.co/api/v2/pokemon";
        ResponseEntity<PokemonBaseList> basicInfo = restTemplate.getForEntity(baseUrl, PokemonBaseList.class);
        Set<PokemonModel> pokemonSet =  Objects.requireNonNull(basicInfo.getBody()).getResults().stream()
                .map(obj -> {
                    ResponseEntity<PokemonModel> pokemon = restTemplate.getForEntity(obj.getUrl(), PokemonModel.class);
                    return pokemon.getBody();
                }).collect(Collectors.toSet());
        PokemonResponseList pokemons = new PokemonResponseList(pokemonSet, basicInfo.getBody());

        return pokemons;
    }



}
