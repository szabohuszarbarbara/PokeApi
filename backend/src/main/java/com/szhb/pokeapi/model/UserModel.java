package com.szhb.pokeapi.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.szhb.pokeapi.security.UserRole;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

}
