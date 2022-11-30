package com.szhb.pokeapi.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.szhb.pokeapi.security.UserRole;
import lombok.*;

import javax.persistence.*;

import static com.szhb.pokeapi.security.UserRole.ROLE_USER;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class UserModel {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO, generator="my_entity_seq_gen")
    @SequenceGenerator(name="my_entity_seq_gen", sequenceName="MY_ENTITY_SEQ")
    private Long id;
    private String name;
    private String username;
    private String email;
    @JsonIgnore
    private String password;
    private String imageSource;
    private String profileDescription;
    @Enumerated(EnumType.STRING)
    private UserRole role;

    public UserModel(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ROLE_USER;
    }

}
