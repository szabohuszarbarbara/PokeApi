package com.szhb.pokeapi.controller;

import com.szhb.pokeapi.model.dto.PokemonModelDTO;
import com.szhb.pokeapi.model.dto.PokemonResponseListDTO;
import com.szhb.pokeapi.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pokemon")
@CrossOrigin(origins = "http://localhost:3000")
public class PokemonController {
    private final PokemonService pokemonService;

    @Autowired
    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    @GetMapping
    @ResponseBody
    public PokemonResponseListDTO getPokedexPokemons(@RequestParam("offset") String offset, @RequestParam("limit") String limit) {
        return pokemonService.getPokemonList(offset, limit);
    }
    @GetMapping(value="{id}")
    public PokemonModelDTO getPokemonByIdOrName(@PathVariable String id) {
        return pokemonService.getPokemonByIdOrName(id);
    }

    @GetMapping(value= "/pokemon-of-the-day")
    public PokemonModelDTO getPokemonOfTheDay() {
        return pokemonService.getPokemonOfTheDay();
    }

}
