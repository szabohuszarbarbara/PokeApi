package com.szhb.pokeapi.service;

import com.szhb.pokeapi.model.PokemonDateModel;
import com.szhb.pokeapi.model.dto.PokemonBaseListDTO;
import com.szhb.pokeapi.model.dto.PokemonColorDTO;
import com.szhb.pokeapi.model.dto.PokemonModelDTO;
import com.szhb.pokeapi.model.dto.PokemonResponseListDTO;
import com.szhb.pokeapi.repository.PokemonRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PokemonService {
    private final String BASE_URL = "https://pokeapi.co/api/v2/pokemon";
    private final PokemonRepository pokemonRepository;


    public PokemonResponseListDTO getPokemonList(String offset, String limit) {
        RestTemplate restTemplate = new RestTemplate();
        String baseUrl = BASE_URL + "?offset=" + offset + "&limit=" + limit;
        ResponseEntity<PokemonBaseListDTO> basicInfo = restTemplate.getForEntity(baseUrl, PokemonBaseListDTO.class);
        List<PokemonModelDTO> pokemonList =  Objects.requireNonNull(basicInfo.getBody()).getResults().stream()
                .map(obj -> {
                    ResponseEntity<PokemonModelDTO> pokemon = restTemplate.getForEntity(obj.getUrl(), PokemonModelDTO.class);
                    String speciesUrl = Objects.requireNonNull(pokemon.getBody()).getSpecies().getUrl();
                    ResponseEntity<PokemonColorDTO> pokemonColor = restTemplate.getForEntity(speciesUrl, PokemonColorDTO.class);
                    pokemon.getBody().setColor(pokemonColor.getBody());
                    return pokemon.getBody();
                }).collect(Collectors.toList());
        PokemonResponseListDTO pokemons = new PokemonResponseListDTO(pokemonList, basicInfo.getBody() );

        return pokemons;
    }

    public PokemonModelDTO getPokemonByIdOrName(String id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = BASE_URL + "/" + id;
        ResponseEntity<PokemonModelDTO> pokemon = restTemplate.getForEntity(url, PokemonModelDTO.class);
        String speciesUrl = Objects.requireNonNull(pokemon.getBody()).getSpecies().getUrl();
        ResponseEntity<PokemonColorDTO> pokemonColor = restTemplate.getForEntity(speciesUrl, PokemonColorDTO.class);
        pokemon.getBody().setColor(pokemonColor.getBody());
        return pokemon.getBody();
    }

    public PokemonModelDTO getPokemonOfTheDay() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<PokemonBaseListDTO> basicInfo = restTemplate.getForEntity(BASE_URL, PokemonBaseListDTO.class);
        int maxPokemon = Integer.parseInt(basicInfo.getBody().getCount());
        LocalDate now = LocalDate.now();
        Optional<PokemonDateModel> pokemonId = pokemonRepository.findByDate(Date.valueOf(now));
        if (pokemonId.isEmpty()) {
            Random random = new Random();
            int id = random.nextInt(maxPokemon);
            pokemonRepository.saveAndFlush(new PokemonDateModel(id, Date.valueOf(now)));
            return getPokemonByIdOrName(String.valueOf(id));
        }
        return getPokemonByIdOrName(String.valueOf(pokemonId.get().getId()));
    }

}
