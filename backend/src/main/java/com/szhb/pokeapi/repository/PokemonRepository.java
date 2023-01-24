package com.szhb.pokeapi.repository;

import com.szhb.pokeapi.model.PokemonDateModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface PokemonRepository extends JpaRepository<PokemonDateModel, LocalDate> {

    List<PokemonDateModel> findAll();
    Optional<PokemonDateModel> findByDate(LocalDate now);

}
