package com.szhb.pokeapi.model;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "pokemons")
public class PokemonDateModel {

    private int id;
    @Id
    private Date date;


}
