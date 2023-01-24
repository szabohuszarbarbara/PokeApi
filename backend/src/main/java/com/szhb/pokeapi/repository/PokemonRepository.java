package com.szhb.pokeapi.repository;

import com.szhb.pokeapi.model.PokemonDateModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface PokemonRepository extends JpaRepository<PokemonDateModel, Date> {

    List<PokemonDateModel> findAll();
    Optional<PokemonDateModel> findByDate(Date now);


}
