package com.szhb.pokeapi.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "pokemons")
public class PokemonDateModel {
    @Id
    private int id;

    private LocalDate date;


}
