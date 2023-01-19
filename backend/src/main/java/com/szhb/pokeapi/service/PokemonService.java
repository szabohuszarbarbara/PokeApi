package com.szhb.pokeapi.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PokemonService {
    public ResponseEntity<String> getPokemon() {
        RestTemplate restTemplate = new RestTemplate();
        String baseUrl = "https://pokeapi.co/api/v2/pokemon";
        ResponseEntity<String> result = restTemplate.getForEntity(baseUrl, String.class);
        String baseResult = result.getBody();
        System.out.println(result.toString());
        System.out.println(baseResult.toString());
        return result;
    }

}
