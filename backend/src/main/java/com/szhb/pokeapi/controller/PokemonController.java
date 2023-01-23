package com.szhb.pokeapi.controller;

import com.szhb.pokeapi.model.PokemonModel;
import com.szhb.pokeapi.model.PokemonResponseList;
import com.szhb.pokeapi.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

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
    public PokemonResponseList getAllPokemon(@RequestParam("offset") String offset, @RequestParam("limit") String limit) {
        return pokemonService.getPokemonList(offset, limit);
    }
    @GetMapping(value="{id}")
    public PokemonModel getPokemonByIdOrName(@PathVariable String id) {
        return pokemonService.getPokemonByIdOrName(id);
    }

}
